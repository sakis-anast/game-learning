import {  useState } from "react";
import "../styles/activities.scss";

function Activities() {
  const items = [ ]
  const [value, setValue] = useState('');

  const initialDnDState = {
    draggedFrom: null,
    draggedTo : null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
  }

  const [list, setList] = useState(items)
    const [DnD, setDnD] = useState(initialDnDState)
    const onDragStart = e => {
      setDnD({
        ...DnD,
        draggedFrom: Number(e.currentTarget.dataset.position), //0,1,2,3
        isDragging: true,
        originalOrder: list
      })
    }
    const onDragOver = e => {
      e.preventDefault()
      let newList = DnD.originalOrder
      const draggedFrom = DnD.draggedFrom
      const draggedTo = Number(e.currentTarget.dataset.position)
      const itemDragged = newList[draggedFrom]
      const remainingItems = newList.filter((item, i) => i !== draggedFrom)
      newList = [
        ...remainingItems.slice(0, draggedTo),
        itemDragged,
        ...remainingItems.slice(draggedTo)
      ]
      if(draggedTo !== DnD.draggedTo) {
        setDnD({
          ...DnD,
          updatedOrder: newList,
          draggedTo: draggedTo
        })
      }
    }
    const onDrop = e => {
      setList(DnD.updatedOrder)
      setDnD({
        ...DnD,
        draggedFrom: null,
        draggedTo: null,
        isDragging: false
      })
    }
    const onDragLeave = e => {
      setDnD({
        ...DnD,
        draggedTo: null
      })
    }
 
   
    function handleChange(event) {
     setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        list.push(value)
      
  setValue("")
  
      event.preventDefault();
    };
  
    return (
      <div>
         <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Activity</button>
      </form>
      
        <ul className="activities-list">
          {list.map((item, i) => (
            <>
            <div
            key={i}
            draggable
            data-position={i}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            >
            <li 
            className="post-it"
              
            >{item}
            </li>
            <input></input>

            </div>
            {list.length- 1 === i? null :
            <input></input>
            
            }
          </>
          ))}
          
        </ul>
      </div>
    )
}

export default Activities;