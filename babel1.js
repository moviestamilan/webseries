const First = (props) =>{
  return(


<li className='con'>

<div className='container'>
<div className='avatar'>
  <img src={props.src}></img>
  <div className='details'>
<p>
  {props.title}

</p>

<div className='hd'>

	<a  href={props.href}>Download</a>

</div>
</div>
</div>
</div>

</li>
  )
  
}


const App = () => {
  return(
     <span>
<First src='img/paperrocket.jpg'
         title='Paper Rocket – S01 (2022) Tamil Web Series HD 720p Watch Online'  
         href='https://dulink.in/8su4H'
     
          />
         <First src='img/memeboys.jpg'
         title='Meme Boys – S01 (2022) Tamil Web Series HD 720p Watch Online'  
         href='https://dulink.in/brAb'
     
          />
          <First src='img/indianpredator.jpg'
         title='Indian Predator – The Butcher of Delhi – S01 – E01-03 (2022) Tamil Dubbed Series HD 720p Watch Online'  
         href='https://dulink.in/ePA'
     
          /><First src='img/shoorveer.jpg'
         title='Shoorveer – S01 (2022) Tamil Dubbed Series HQ HDRip 720p Watch Online'  
         href='https://dulink.in/IPeh'
     
          /><First src='img/residentevil.jpg'
         title='Resident Evil – S01 (2022) Tamil Dubbed Series HD 720p Watch Online'  
         href='https://dulink.in/1gTEY'
     
          /><First src='img/maaneellatank.jpg'
         title='Maa Neella Tank – S01 (2022) Tamil Web Series HD 720p Watch Online'  
         href='https://dulink.in/5l6Q'
     
          /><First src='img/guiltyminds.jpg'
         title='Guilty Minds – S01 (2022) Tamil Dubbed Series HD 720p Watch Online'  
         href='https://dulink.in/MUky'
     
          /><First src='img/anyastutorial.jpg'
         title='Anyas Tutorial – S01 – E01-07 (2022) Tamil Web Series HD 720p Watch Online'  
         href='https://dulink.in/wfEev'
     
          /><First src='img/theterminallist.jpg'
         title='The Terminal List – S01 (2022) Tamil Dubbed Series HD 720p Watch Online'  
         href='https://dulink.in/WgFy'
     
          /><First src='img/suzhal.jpg'
         title='Suzhal: The Vortex – S01 (2022) Tamil Series HD 720p Watch Online'  
         href='https://dulink.in/yohka'
     
          />

    </span>
  )
      }


