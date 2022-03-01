import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

type UserPropsType = UserType & {
    deleteUser: (id: number) => void
}

function User(props: UserPropsType) {
    return (
        <li>
            {/*<button onClick={() => props.deleteUser(xxx)}>x</button>*/}
            User {props.name}: {props.age} y.o.
        </li>
    )
}

function UsersList() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    const deleteUser = (userID: number) => {
        const filteredUsers = users.filter(u => u.id !== userID)
        setUsers(filteredUsers)
    }
    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// ��� ���� �������� ������ xxx, ����� ��� �������?
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

type UserPropsType = UserType & {
    deleteUser: (id: number) => void
}

function User(props: UserPropsType) {
    const deleteUser = () => props.deleteUser(props.id)
    return (
        <li>
            {/*<button onClick={xxx}>Delete</button>*/}
            User {props.name}: {props.age} y.o.
        </li>
    )
}

function UsersList() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    const deleteUser = (userID: number) => {
        const updatedUsers = users.filter(u => u.id !== userID)
        setUsers(updatedUsers)
    }
    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// ��� ���� �������� ������ xxx, ����� ��� �������?
import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Post() {
    const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        // xxx
        alert("�����-������!!!")
    }
    return (
        <div>
            <article>
                <h4>��� ����, ������?</h4>
                <p>
                    ����, ��� �������. �����, ������� )))
                    Google ��� ���� � �������� �������!
                    C���� ���� � ��������!!!
                </p>
                <a href={"https://www.youtube.com/"}
                   onClick={onClickHandler}
                >� ���� ����� ���������...</a>
            </article>
        </div>
    )
}

ReactDOM.render(
    <Post/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���, ����� ��� �� ��������� �� �������� Youtube
// ��� ����� �� ������?
import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AuthForm() {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        // xxx
        alert()
    }
    return (
        <form>
            <div>
                <label style={{padding: "10px 0"}}>
                    Name:
                    <input type={"email"} name={"email"}/>
                </label>
            </div>
            <div>
                <label style={{padding: "10px 0"}}>
                    Password:
                    <input type={"password"} name={"password"}/>
                </label>
            </div>
            <button
                onClick={onClickHandler}
                type={"submit"}>
                Log in
            </button>
        </form>
    )
}

ReactDOM.render(
    <AuthForm/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���, ����� ������ �� �����
// �� ������������ �� ������ � �������� �� ���������������
// ��� ����� �� ������?
import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User() {
    const [userName, setUserName] = useState<string>("")
    // const onChangeHandler = (e: xxx )=> setUserName(e.currentTarget.value)
    return (
        <div>
            <p>{userName}</p>
            <input
                // onChange={onChangeHandler}
            />
        </div>
    )
}

ReactDOM.render(
    <User/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���, ����� ��������� ������������
// �������� �������?
import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User() {
    const [userName, setUserName] = useState<string>("")
    return (
        <div>
            <p>{userName}</p>
            <input
                // xxx
                onChange={(e) => setUserName(e.currentTarget.value)}
            />
        </div>
    )
}

ReactDOM.render(
    <User/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���, ����� ����� ��� ��������������?
import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User() {
    const [userName, setUserName] = useState<string>("")
    const [text, setText] = useState<string>("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
    return (
        <div>
            <input
                value={userName}
                onChange={onChangeHandler}
                onBlur={()=> {
                    // xxx
                    setText(userName)
                }}
            />
            <p>{text}</p>
        </div>
    )
}

ReactDOM.render(
    <User/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���,
// ����� ����� ������ ������ � �������� ���������� ����� ����� ���������?
import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                // xxx = {addNote}
            />
            <h4>Notes:</h4>
            <div>
                {notes.map((n,i )=> <p key={i}>{n}</p>)}
            </div>
        </div>
    )
}


ReactDOM.render(
    <Notes/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���,
// ����� ��� ������ ������� ������ ����������� �������?
import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button
                    // onClick={xxx}
                >Clear notes list</button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
        </div>
    )
}

ReactDOM.render(
    <Notes/>, document.getElementById('root')
);
// ��� ���� �������� ������ ���,
// ����� ��� ����� ������ ������� ��������?