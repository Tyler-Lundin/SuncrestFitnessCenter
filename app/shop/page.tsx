import TitledContainer from "@/components/TitledContainer";
import Page from "@/components/page/Page";


export default function ShopPage() {

  return (
    <Page>
      <TitledContainer title='Shop' subtitle='Gym gear for all ages, shapes, and sizes!' />
      <div className='flex w-full h-full pb-8'>
        <div className=' h-screen rounded-r-2xl w-96 bg-black hidden lg:flex' />
        <div className='flex flex-wrap gap-3 w-full h-screen px-8 pb-8 lg:px-16 overflow-y-scroll'>

          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
          <div className='grid mx-auto w-72 h-96 bg-black rounded-lg' />
        </div>
      </div>

    </Page>
  )
}
