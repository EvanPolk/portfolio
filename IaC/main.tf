locals {
  dist_path = "../frontend/dist"
  files     = fileset(local.dist_path, "**/*")
  domain    = "evan-polk.com"
}

# Bucket Configuration
resource "aws_s3_bucket" "main" {
  bucket = "evan-polk-portfolio-bucket"
}

resource "aws_s3_bucket_website_configuration" "main" {
  bucket = aws_s3_bucket.main.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_object" "main" {
  for_each = toset(local.files)

  bucket = aws_s3_bucket.main.id
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

resource "aws_s3_bucket_ownership_controls" "main" {
  bucket = aws_s3_bucket.main.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "main" {
  bucket = aws_s3_bucket.main.id

  # TODO: Make bucket private for CDN
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.main.id

  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        # Allow public read access to the bucket (list the contents)
        {
          "Sid" : "PublicReadListBucket",
          "Effect" : "Allow",
          "Principal" : "*",
          "Action" : "s3:ListBucket",
          "Resource" : "${aws_s3_bucket.main.arn}"
        },
        # Allow public read access to all objects inside the bucket
        {
          "Sid" : "PublicReadGetObject",
          "Effect" : "Allow",
          "Principal" : "*",
          "Action" : "s3:GetObject",
          "Resource" : "${aws_s3_bucket.main.arn}/*"
        }
      ]
    }
  )
}
