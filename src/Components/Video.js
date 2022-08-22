import video from '../music.mp4';

function Video () {
return(
    <div>
        <div>
                <video  className='videoTop' autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
    </div>
)

}

export default Video;