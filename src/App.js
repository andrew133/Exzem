// import React from 'react';
// import './App.css';
//
// � ���� � ������ ������ �������� ���� � �� �� ������.
//
//     ����� ����� ������ ���� �������� ������ ����������?
//
//     copy
// export const Wrapper  = () => {
//     return <user city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const user: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
// ��� ����� �������� ������ ���, ����� �� ������ �������:
//
//     ? ��������� �����
//
// ? ������� �����
//
// ? ���������� ������
//
// copy
// import ReactDOM from 'react-dom'
//
// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         ? ��������� �����
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         ? ������� �����
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         ? ���������� ������
//     </div>
// }
//
// ReactDOM.render(<div>���</div>,
//     document.getElementById('root')
// );
//
// //��� ����� �������� ������ ���, ����� �� ������ �������:
// //? ��������� �����
// //? ������� �����
// //? ���������� ������
// ��� ����� �������� ������ ���, ��� �� ��� �������?
//
//     copy
//     type PropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<PropsType> = (props) => {
//     return <div>
//         <h1>���: {props.name}</h1>
//         //<div>��������: {���}</div>
//     </div>
// }
// ��� ���������� ���������� ����� �������� � ������ 8 (c����� � �������), ����� �� ���� ������
//
//
// copy
// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk'/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
// ��� ����� �������� ������ xxx � yyy? ����� ����� ����� ������, ��������:
// blabla onClick(props)
//
// copy
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={xxx} n={yyy} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
// ��� ����� �������� ������ XXX � YYY? ����� ����� ����� ������, ��������:
// car user
//
//
// copy
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: Date
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>��������: {props.XXX.title}</h1>
//             {props.XXX.date}
//             <div>{props.XXX.date}</div>
//             <div>{props.XXX.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.YYY.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }
// ��� ����� �������� ������ xxx � yyy, ����� ��������� UserMoney ��������� ���������� � ���� ��������� (bitcoin � $)?
//
//     ����� ����� ����� ������, ��������: props.x wallets
//
// copy
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xxx} />
//         <UserWallet wallet={yyy} />
//     </div>
// }
// ��� ����� �������� ������ xxx yyy zzz, ����� ������� ��������� ���������?
//
//     ����� ����� ����� ������, ������: a={12} ccc={video.id} d={'hello'}
//
//
// copy
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         ? {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         ? <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         ? {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription zzz />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );
// ��� ����� �������� ������ XXX YYY ZZZ? ����� ����� ����� ������
//
//
// copy
// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.XXX,
//         backgroundColor: props.YYY
//     }
//
//     return <button style={style}>
//         {props.ZZZ}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
//
// ��� ����� �������� ������ XXX YYY ZZZ? ����� ����� ����� ������
//
// copy
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny XXX={'������'} YYY={'����'} ZZZ={'���'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
// export default App;
