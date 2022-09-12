import './Fish.css';
import { ACContext } from '../../../context/context';
import { useContext , useState , useEffect } from 'react';


const Fish = ( ) => {
  
  const { MainObject } = useContext(ACContext);

  const iconFishImg = document.querySelectorAll('.icon-fish-img');
  const fishCard    = document.querySelectorAll('.card');
  const months      = document.querySelectorAll('.months'); 
  const searchPanel = document.querySelector('.search-panel__input'); 
  
  const followFish = ( event, i ) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];

    fishImage.style.left = 0;
    fishImage.style.top = 0;
    fishImage.style.boxShadow = 'none';

    let mouseX = event.clientX,        
        mouseY = event.clientY,
        iconX  = fishImage.getBoundingClientRect().left + 16, // +2rem 
        iconY  = fishImage.getBoundingClientRect().top  + 16, // +2rem
        baseX  = mouseX - iconX,
        laterY = mouseY - iconY,
        cardX  = card.getBoundingClientRect().left,
        cardY  = card.getBoundingClientRect().top,
        movX   = mouseX - cardX,
        movY   = mouseY - cardY,
        angle  = Math.atan(laterY / baseX);

    if (mouseX >= iconX ) {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 180deg )`;
    } else {
      fishImage.style.transform = `rotate( ${ angle }rad ) rotateY( 0deg )`;
    };

    fishImage.style.translate = ` ${ movX }px  ${ movY }px `;
    fishImage.style.backgroundColor = 'transparent';    
  };
  
  const backFish = ( event, i ) => {
    const fishImage = iconFishImg[ i - 1 ];
    const card      = fishCard[ i - 1 ];

    let cardW  = card.getBoundingClientRect().width,
        cardH  = card.getBoundingClientRect().height;

    fishImage.style.boxShadow  = 'inset 0 0 1rem var(--normal)';
    fishImage.style.translate  = ` ${cardW/2 - 32}px  ${cardH - 32}px `;
    fishImage.style.transform  = 'rotate( 0deg ) '
  };

  const searchFilter = f => f.name['name-USen'].includes(searchPanel.value.toLowerCase());

  useEffect(() => {
      months.forEach(v => v.style.backgroundColor = '#7e775e' );
      setTimeout(() => months.forEach(v => v.style.backgroundColor = 'transparent' )
      , 800);
  }, [months]);

  const [ zonaNorte    , setZonaNorte ]       = useState(true);
  const [ sortPrice    , setSortPrice ]       = useState(0);
  const [ sortRarity   , setSortRarity ]      = useState(0);
  const [ sortLocation , setSortLocation ]    = useState(0);
  const [ sortShadow   , setSortShadow ]      = useState(0);
  const [ isSearch     , setIsSearch ]        = useState(false);


  return (

    <div className='table'>

    <div className='buttons'>
      <button className='btn' onClick={ () => setZonaNorte(true) } >Northern</button>
      <button className='btn' onClick={ () => setZonaNorte(false) } >Southern</button>
    </div>

    <h3 className='zone' >{ zonaNorte ? 'Northern' : 'Southern' }</h3>

    <div className="search-panel">
      <input className="search-panel__input" type="text" onKeyUp={ () => setIsSearch( isSearch ? false : true ) }/> 
      {/* <input className="search-panel__input" type="text" onKeyUp={ () => setIsSearch( null ) }/>  */}
      {/* Necesita tener algún efecto sobre algo global dentro del objeto, o el objeto mismo, lo más simple es setObjetoGenérico */}
      <button className="search-panel__button" onClick={ () => setIsSearch( isSearch ? false : true ) } >🔍</button>
    </div>

    <div className='sorting'>
      <b>Sort by:  </b>
      <button className='sortBtn' 
        onClick={ () => setSortPrice( sortPrice < 2 ? sortPrice + 1 : 0 )} 
      >Price</button>
      <button className='sortBtn' 
        onClick={ () => setSortRarity( sortRarity < 2 ? sortRarity + 1 : 0 )} 
      >Rarity</button>
      <button className='sortBtn' 
        onClick={ () => setSortLocation( sortLocation < 2 ? sortLocation + 1 : 0 )} 
      >Location</button>
      <button className='sortBtn' 
        onClick={ () => setSortShadow( sortShadow < 2 ? sortShadow + 1 : 0 )} 
      >Shadow size</button>

    </div>


      { (MainObject.length > 0) ?

        //*1. Filter - Search Mainobject.name; 
        //?2. Filter - Location : river, sea, etc Mainobject.ava.location;
        //?3. Filter - Rarity : common , rare, special, etc Mainobject.ava.rarity;
        //?4. Sort - Shadow , Price Mainobject.shadow || Mainobject.price;
        //
        //?5. + Resaltado

        (isSearch || !isSearch) && MainObject.filter( searchFilter )
          
        .map( (  fish  ) => (

        <div className="gallery" key={fish.id}>
          <figure className='card'  
          onMouseMove={ () => followFish( event, fish.id ) }
          onMouseLeave={ () => backFish( event, fish.id ) }
          >
            <h1 className='name-fish' >{ fish.name['name-USen'] }</h1>
            
            <ul className='info-fish' >
              <li>
                <p>Price - <b>{ fish.price } bayas</b></p>
                <p>Price(CJ) - <b>{ fish['price-cj'] } bayas</b></p>
              </li>
              <li>
                <p>Rarity - <b>{ fish.availability.rarity }</b></p>
                <p>Time - <b>{ fish.availability.isAllDay? 'All day' : fish.availability.time }</b></p>
              </li>
              <li>
                <p>Location - <b>{ fish.availability.location }</b></p>
                <p>Shadow size - <b>{ fish.shadow }</b></p>
              </li>
            </ul>

            <div className='calendar' > 
              <p>Disponibility:</p>
              <ul className='months' >
                { fish.availability.isAllYear  ? 'All Year' : ( zonaNorte 
                ? fish.availability['month-array-northern'] : fish.availability['month-array-southern'])
                .map( (v , i , a) => {
                  
                  (i === (a.length - 1 ) || i === 0 ? (
                    v === 1 &&  (v = 'Jan') || 
                    v === 2 &&  (v = 'Feb') || 
                    v === 3 &&  (v = 'Mar') ||
                    v === 4 &&  (v = 'Apr') ||
                    v === 5 &&  (v = 'May') ||
                    v === 6 &&  (v = 'Jun') ||
                    v === 7 &&  (v = 'Jul') ||
                    v === 8 &&  (v = 'Aug') ||
                    v === 9 &&  (v = 'Sep') ||
                    v === 10 && (v = 'Oct') ||
                    v === 11 && (v = 'Nov') ||
                    v === 12 && (v = 'Dec')
                    ) : v = ''
                  ); 
                  return v;

                  } ).join( ' ' ).replace(/\s+/g, ' - ') }
              </ul>
            </div>

            <img className='icon-fish-img' src={ fish.icon_uri } alt={`icon of ${ fish.name['name-USen']}`} />
          </figure>
        </div>


      ))
      : (
        <h2 className='charge' >Cargando...</h2> 
      )}
    </div>

  )
}

export default Fish;