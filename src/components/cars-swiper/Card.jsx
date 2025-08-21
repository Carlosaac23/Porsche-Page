export default function Card() {
  return (
    <div className='flex flex-col items-center border border-neutral-800 rounded-lg hover:border-neutral-400 duration-200 ease-out'>
      <h2>Soy una carta</h2>
      <h3>Subtitulo</h3>
      <img src='' alt='Imagen del auto' />
      <p>Caracteristicas</p>
      <p>Precio</p>
    </div>
  );
}
