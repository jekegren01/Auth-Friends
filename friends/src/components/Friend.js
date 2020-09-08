import React, {useState} from "react";

const Friend = (props) => {
    const [editing, setEditing] = useState(false);
    const [edits, setEdits] = useState({
        name: props.friend.name,
        age: props.friend.age,
        email: props.friend.email
    })

    const onChange = e => {
        setEdits({
            ...edits,
            [e.target.name]: e.target.value
        })
    }

    const submitEdits = id => {
        props.updateFriend(id, edits);
        setEditing(false);
    }
    return (
        <div className="friend">
            {editing?(
                <div>
                    <input
                        onChange={onChange}
                        type="text" name="name"
                        value={edits.name}
                        placeholder="name"
                        />
                    <input
                        onChange={onChange}
                        type="number"
                        name="age"
                        value={edits.age}
                        placeholder="age"
                        />
                    <input
                        onChange={onChange}
                        type="email"
                        name="email"
                        value={edits.email}
                        placeholder="email"
                        />
                    <div>
                        <button onClick={()=> setEditing(false)}>Cancel</button>
                        <button onClick={()=> submitEdits(props.friend.id)}>Submit Edits</button>
                    </div>
                </div>
            ): 
                <div>
                    <p>
                        <strong>{props.friend.name}</strong> {props.friend.age}
                    </p> 
                    <address>{props.friend.email}</address>        
                    <button onClick={()=> setEditing(true)}>Edit</button>
                    <button onClick={()=> props.deleteFriend(props.friend.id)}>Delete</button>
                </div>
            }
        </div>
    )
}

export default Friend;