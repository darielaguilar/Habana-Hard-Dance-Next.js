
import Head from 'next/head'
import Header from '../components/Header'
import TextContainer from '../components/TextContainer'
import Footer from '../components/Footer'
import ContactItem from '../components/ContactItem'
import SectionSlide from '../components/SectionSlide';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim. Blandit cursus risus at ultrices mi tempus. Sed risus ultricies tristique nulla aliquet enim tortor. Lacus vel facilisis volutpat est velit. Semper quis lectus nulla at volutpat diam ut. Non sodales neque sodales ut etiam sit amet. Vel elit scelerisque mauris pellentesque. Ullamcorper eget nulla facilisi etiam. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin."+

    "Bibendum at varius vel pharetra vel turpis. Condimentum lacinia quis vel eros donec ac.";
    const text2 = "Amet venenatis urna cursus eget nunc scelerisque. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ut etiam sit amet nisl. Massa placerat duis ultricies lacus sed turpis tincidunt id. Quis viverra nibh cras pulvinar mattis nunc. Cursus risus at ultrices mi tempus. A cras semper auctor neque. Lobortis mattis aliquam faucibus purus in. Euismod lacinia at quis risus sed vulputate odio ut enim. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Consectetur adipiscing elit pellentesque habitant morbi. Adipiscing elit pellentesque habitant morbi tristique senectus. Imperdiet proin fermentum leo vel orci porta non."+
  
    "Tellus cras adipiscing enim eu turpis egestas pretium aenean. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Imperdiet nulla malesuada pellentesque elit eget gravida. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Massa sapien faucibus et molestie. Viverra orci sagittis eu volutpat odio facilisis. Lobortis elementum nibh tellus molestie nunc non. Accumsan in nisl nisi scelerisque eu. Magna fermentum iaculis eu non diam phasellus vestibulum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Adipiscing enim eu turpis egestas pretium. Semper eget duis at tellus at urna condimentum. Et tortor at risus viverra adipiscing at in. Non sodales neque sodales ut etiam sit amet nisl purus. Nisi quis eleifend quam adipiscing. Ridiculus mus mauris vitae ultricies. Enim diam vulputate ut pharetra. Senectus et netus et malesuada fames ac. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Scelerisque felis imperdiet proin fermentum."
    
    
  
    const text3 = "Pellentesque id nibh tortor id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Feugiat nisl pretium fusce id velit. Eu augue ut lectus arcu bibendum at varius vel. Diam maecenas sed enim ut sem viverra aliquet. Magna fermentum iaculis eu non diam. Aenean pharetra magna ac placerat vestibulum lectus. Turpis cursus in hac habitasse platea. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tincidunt vitae semper quis lectus nulla at volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse. Aliquet enim tortor at auctor urna nunc. Varius vel pharetra vel turpis nunc eget lorem dolor."+
    
    "Urna id volutpat lacus laoreet non curabitur gravida. Vitae sapien pellentesque habitant morbi tristique. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Ipsum faucibus vitae aliquet nec ullamcorper. Dui accumsan sit amet nulla facilisi morbi. Sit amet consectetur adipiscing elit ut aliquam purus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Morbi enim nunc faucibus a pellentesque. Velit euismod in pellentesque massa placerat. Diam phasellus vestibulum lorem sed risus ultricies tristique. Quis hendrerit dolor magna eget est lorem ipsum dolor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi morbi tempus iaculis.";
  return (
    
    
      
      <div className="flex flex-col  bg-slate-300">
        <Head>
          <title>Habana Hard Dance</title>
          <meta name="keywords" content='Hardstyle, Habana, Habana Hard Dance, A-Core, A Core, Rour Thunderz, Ikari Night,Cuba,Havana music'/>
          <meta name="author" content='Dariel Aguilar Stewart'/>
          <meta name="description" content='First consolidated Hardstyle cuban movement website. Brief history, and many djs bio'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Header >
          <h1 className="font-sans text-white text-2xl tracking-wide font-bold text-center align-middle my-12">Habana Hard Dance</h1>
        </Header>
        
        <TextContainer header="Quienes somos" text={text1 }/>

        <SectionSlide/>
        <TextContainer header="El hardstyle, hardcore y el hard en si" text={text2}/>
        <TextContainer header="Sobre el futuro" text={text3}/>
        <Footer>
          
          <ContactItem />
          
        </Footer>
        
      </div>
  )
}
