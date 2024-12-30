locals {
  dist_path           = "../frontend/dist"
  files               = fileset(local.dist_path, "**/*")
  domain              = "evan-polk.com"
  subdomain           = "www.evan-polk.com"
  hosted_zone_id      = "Z03834442B0ERNV6J1KD2"
  acm_certificate_arn = "arn:aws:acm:us-east-1:149536489808:certificate/57f630e9-ff41-4edb-a95f-6891dfcf4ffc"
}

# Subdomain config
resource "aws_s3_bucket" "subdomain" {
  bucket = local.subdomain
}

resource "aws_cloudfront_distribution" "subdomain" {
  aliases             = [local.subdomain]
  default_root_object = "index.html"
  enabled             = true
  is_ipv6_enabled     = true
  wait_for_deployment = true

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD", "OPTIONS"]
    # Caching Optimized
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    target_origin_id       = aws_s3_bucket.subdomain.id
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name              = aws_s3_bucket.subdomain.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
    origin_id                = aws_s3_bucket.subdomain.bucket
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = local.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_control" "main" {
  name                              = "s3-cloudfront-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_iam_policy_document" "cloudfront-oac-access-subdomain" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = ["${aws_s3_bucket.subdomain.arn}/*"]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.subdomain.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.subdomain.id
  policy = data.aws_iam_policy_document.cloudfront-oac-access-subdomain.json
}

resource "aws_s3_object" "main" {
  for_each = toset(local.files)

  bucket = aws_s3_bucket.subdomain.id
  key    = each.value
  source = "${local.dist_path}/${each.value}"

  content_type = lookup({
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "json" = "application/json",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "png"  = "image/png",
    "gif"  = "image/gif",
    "svg"  = "image/svg+xml"
  }, split(".", "${each.value}")[1], "text/html")
}

resource "aws_route53_record" "subdomain" {
  name    = local.subdomain
  type    = "A"
  zone_id = local.hosted_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.subdomain.domain_name
    zone_id                = aws_cloudfront_distribution.subdomain.hosted_zone_id
  }
}

resource "aws_s3_bucket" "root" {
  bucket = local.domain
}

resource "aws_s3_bucket_website_configuration" "root" {
  bucket = aws_s3_bucket.root.id

  redirect_all_requests_to {
    host_name = local.subdomain
    protocol  = "https"
  }
}

resource "aws_cloudfront_distribution" "root" {
  aliases             = [local.domain]
  enabled             = true
  is_ipv6_enabled     = true
  wait_for_deployment = true

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD", "OPTIONS"]
    # CachingDisabled
    cache_policy_id        = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad"
    target_origin_id       = aws_s3_bucket.root.id
    viewer_protocol_policy = "redirect-to-https"
  }

  origin {
    domain_name = aws_s3_bucket_website_configuration.root.website_endpoint
    origin_id   = aws_s3_bucket_website_configuration.root.id
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = local.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}

resource "aws_route53_record" "root" {
  name    = local.domain
  type    = "A"
  zone_id = local.hosted_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.root.domain_name
    zone_id                = aws_cloudfront_distribution.root.hosted_zone_id
  }
}