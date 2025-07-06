import Navbar from '../components/Navbar';

function Homelab() {
  return (
    <div className='w-screen h-fill font-dmsans bg-stone-300 overflow-visible'>
      <Navbar startPage='HomeLab'/>
      <div className='w-screen h-fill flex-col items-center justify-center text-stone-800'>
        <div>
          <h1 className='px-8 pt-8 text-xl font-semibold'>Summary</h1>
          <h1 className='px-8 pt-4'>My interest in homelabbing was largely what brought me to consider doing IT work as a career. I really enjoyed applying my education to real world problems to actively made my life easier.</h1>
        </div>

        <div>
          <h1 className='px-8 pt-8 text-xl font-semibold'>Services</h1>
          <div className='px-8 flex flex-row items-center'>
            <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
            <h1 className='pt-4'>Tailscale - VPN service which lets me access the benefits of my home lab from anywhere</h1>
          </div>
          <div className='px-8 flex flex-row items-center'>
            <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
            <h1 className='pt-4'>Samba - Allowed me to move away from cloud storage solutions and save on costs</h1>
          </div>
          <div className='px-8 flex flex-row items-center'>
            <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
            <h1 className='pt-4'>Apache - This is the web server I chose to distribute my website</h1>
          </div>
          <div className='px-8 flex flex-row items-center'>
            <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
            <h1 className='pt-4'>Pihole - Helps me create domains for internal services that aren't public</h1>
          </div>
          <div className='px-8 flex flex-row items-center'>
            <div className='h-1.5 aspect-square m-2 rounded-full bg-stone-800'></div>
            <h1 className='pt-4'>Nginx Proxy Manager - This allows me to expose internal web services through TLS encrypted https urls instead of using http://homeserver:port for every internal service</h1>
          </div>
        </div>

        <div>
          <h1 className='px-8 pt-8 text-xl font-semibold'>Future</h1>
          <h1 className='px-8 pt-4'>I'm moving into my new apartment soon. With this improvement in housing I also get to control my own router settings on my own wifi network. This will allow me to switch from exclusively using docker containers to using proxmox.</h1>
          <h1 className='px-8 py-4'> I plan on spinning up VMs for my webserver and pihole services. My huge Docker-Compose file will be on its own VM as well. This will help simplify and speed up my network. Currently due to port forwarding and network discovery limitations on my universities wifi, I was unable to make this switch.</h1>
        </div>
      </div>
    </div>
  );
}

export default Homelab;
