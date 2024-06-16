import Card from '../../componets/cards/Card';
import './CardsGallery.css'

const CardsGallery = () => {
  return (
    <section className='cards-gallery'>
        <Card 
  imgUrl = 'https://www.billboard.com/wp-content/uploads/2024/02/Messi-2023-billboard-espanol-1548.jpg?w=942&h=623&crop=1'
  titulo = 'messi 1'
  descripcion = 'esta es una descripcion'
  />
  <Card
  imgUrl = 'https://es.rollingstone.com/wp-content/uploads/2023/06/Se-estrenara-serie-documental-de-Lionel-Messi.jpg'
  titulo = 'messi 2'
  descripcion = 'esta es una descripcion'
  />
  <Card
  imgUrl = 'https://www.psg.fr/media/243556/messi-argentine-2.jpg?center=0.39945652173913043,0.52898550724637683&mode=crop&width=800&height=450&quality=60'
  titulo = 'messi 3'
  descripcion = 'esta es una descripcion'
  />
    </section>
  )
}

export default CardsGallery