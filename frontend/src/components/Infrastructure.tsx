import homelab from '../assets/homelab.jpg'

function Infrastructure() {
  return (
    <div className='w-screen h-1/2 bg-stone-300 text-lg flex-col items-center justify-center'>
      <h1 className='px-8 pt-8 pb-2 w-full text-2xl font-bold'>Infrastructure</h1>
      <h1 className='px-8 py-4 w-full'>This site is self-hosted on my homelab</h1>
      <h1 className='px-8'>
        Using Cloudflare Tunnels allows me to publish this website directly to your screen from my homelab.
      </h1>
      <div className='p-8 h-1/2 flex flex-row justify-between items-center'>
        <img src={homelab} className='h-48 border-2 border-stone-800 aspect-auto rounded-md'></img>
        <h1 className='pl-8 text-md'>Currently my homelab is running on an old laptop with a broken screen. I have a dedicated page for my planned improvements.</h1>
      </div>
    </div>
  );
}

export default Infrastructure;
