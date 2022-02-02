// / Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
// //
// //     Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
//
//
// copy
 import ReactDOM from 'react-dom'
import React from 'react'

 export const VideoHeader = (props: {videoName: string}) => {
     return <div>
         😀 {props.videoName}
     </div>
 }
 export const VideoContent = (props: {videoContent: string}) => {
     return <div>
         📼 <a href={props.videoContent}>{props.videoContent}</a>
     </div>
 }
 export const VideoDescription = (props: {videoDescription: string}) => {
    return <div>
         📑 {props.videoDescription}
    </div>
}
 export const YoutubeVideo = (props: any) => {

     return <div>
         <VideoHeader videoName={props.video.title}/>
        <VideoContent videoContent={props.video.link} />
         <VideoDescription videoDescription={props.video.description} />
     </div>
 }
//
 export const App = () => {
     const video = {
         title: 'Samurai way',
         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
         description: 'Best free react-course'
     }

     return <YoutubeVideo video={video} />
 }
ReactDOM.render(
    <App/>, document.getElementById('root')
);