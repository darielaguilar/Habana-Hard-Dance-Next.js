
import Head from 'next/head'
import Header from '../components/Header'
import TextContainer from '../components/TextContainer'
import Footer from '../components/Footer'
import ContactItem from '../components/ContactItem'
import SectionSlide from '../components/SectionSlide';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  const text1 = "Habana Hard Dance es un movimiento para promover los géneros del Hard en especial el Hardstyle, el Techno Hardcore Gabber(Hardcore) y el Hard Techno."+
                "Fundado en abril del 2019 por Rour Thunderz, Ikari Night y D-Acore. Cuba es un país donde los géneros"+
                " Hard estan empezando a llamar la atención y uno de nuestros objetivos es que todos los amantes de esta"+
                " música encuentren la información necesaria sobre que es lo que pasa con estos grandes estilos"+
                " aqui en el país y alrededor del mundo, informandoles de todos los acontecimientos. También damos detallada"+
                " información de todos los estilos dentro del Hard Dance para que los cubanos aprendamos un poco mas cada dia sobre esta"+
                " maravillosa música";

    
    const text2 = "Hardstyle es un subgénero de la música electrónica con origen en el Trance y Hard Trance del año 2000 en países como Italia, Alemania y Holanda . El hardstyle normalmente consiste en un profundo y fuerte sonido de bombos, intensas líneas de bajo descontroladas o invertidas que acompañan el ritmo, un sintetizador tocando una melodía, y sonidos tanto distorsionados como melódicos. \nLos artistas de la corriente hardcore sentaron las bases del hardstyle.Uno de los primeros eventos de hardstyle, fue Qlubtempo,3​ y tuvo lugar a.finales del siglo XX (1998-99) lo que hoy en día evolucionó a Qlimax."+

    "Los primeros años de la escena Hardstyle se caracterizaba por un ritmo de alrededor de 135-150 BPM, un sonido comprimido de batería, una muestra vocal corta, un chillido y un uso de un \"Reverse\" (kick and bass), que se puede escuchar después de cada golpe (similar al género del hard trance)."+
    
    "Alrededor de los años 2004 y 2005 se convirtió en un género más melódico y edificante (generándose el subgénero Nu-Style), un poco más rápido (por lo general 150 BPM), y distorsionado, con bajos acompañado de los golpes (basslines). La interpretación de este estilo radica en un comienzo (heredados del hard house), intermedio (heredados del hard trance) y finalización que va con un conteo de 4x4, dándole referencia a los golpes (heredado de la escena hardcore)."
    
    
  
    const text3 = "Pellentesque id nibh tortor id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Feugiat nisl pretium fusce id velit. Eu augue ut lectus arcu bibendum at varius vel. Diam maecenas sed enim ut sem viverra aliquet. Magna fermentum iaculis eu non diam. Aenean pharetra magna ac placerat vestibulum lectus. Turpis cursus in hac habitasse platea. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tincidunt vitae semper quis lectus nulla at volutpat. Leo vel orci porta non pulvinar neque laoreet suspendisse. Aliquet enim tortor at auctor urna nunc. Varius vel pharetra vel turpis nunc eget lorem dolor."+
    
    "Urna id volutpat lacus laoreet non curabitur gravida. Vitae sapien pellentesque habitant morbi tristique. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Ipsum faucibus vitae aliquet nec ullamcorper. Dui accumsan sit amet nulla facilisi morbi. Sit amet consectetur adipiscing elit ut aliquam purus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Morbi enim nunc faucibus a pellentesque. Velit euismod in pellentesque massa placerat. Diam phasellus vestibulum lorem sed risus ultricies tristique. Quis hendrerit dolor magna eget est lorem ipsum dolor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi morbi tempus iaculis.";
  return (
    
    
      
      <div className="flex flex-col   bg-slate-300">
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
        <div className='flex align-middle mx-2 my-2 justify-center'>
        <audio controls autoPlay>
            <source src="Mustang Gunz for hire-E-Life.mp3" type="audio/mpeg"/>Your browser does not support the audio element
          </audio>
        </div>
        <Footer>
          
          <ContactItem />
          
        </Footer>
        
      </div>
  )
}
