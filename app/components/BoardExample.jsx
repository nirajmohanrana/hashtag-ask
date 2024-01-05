"use client";

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./BoardExample.css"
const initialData = {
  
  tasks: {
    "ask-1": {
      id: "ask-1",
      content: "Stunning Post For Instagram",
      description: "New product post for new year, with some discount",
    },
    "ask-2": {
      id: "ask-2",
      content: "Create an Engaging Infographic",
      description: "Visual representation of product benefits",
    },
    "ask-3": {
      id: "ask-3",
      content: "Customer Testimonial Compilation",
      description: "Gather feedback for the new product",
    },
    "ask-4": {
      id: "ask-4",
      content: "Behind-the-Scenes Video",
      description: "Showcase product development or team dynamics",
    },
    "ask-5": {
      id: "ask-5",
      content: "Live Q&A Session on Social Media",
      description: "Answer customer queries about the new product",
    },
    "ask-6": {
      id: "ask-6",
      content: "Interactive Product Demo",
      description: "Engage users with an immersive product showcase",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "#Ask",
      taskIds: ["ask-4", "ask-5", "ask-6"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["ask-2", "ask-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: ["ask-1"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const BoardExample = () => {

  const [hoverClass, setHoverClass] = useState([]);

  const handleMouseEnter = (taskId) => {
      setHoverClass(() => ({
        [taskId]: "line-clamp-none",
      }));
  }
  
  const handleMouseLeave = (taskId) => {
      setHoverClass(() => ({
        [taskId]: "",
      }));
  }

  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = tasks.columns[source.droppableId];
    const endColumn = tasks.columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newTasks = {
        ...tasks,
        columns: {
          ...tasks.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTasks(newTasks);
    } else {
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const endTaskIds = Array.from(endColumn.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      };

      const newTasks = {
        ...tasks,
        columns: {
          ...tasks.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        },
      };

      setTasks(newTasks);
    }
  };

  const Column = ({ column, tasks }) => {
    const Task = ({ task, index }) => {
      const taskId = task.id;
      const taskHoverClass = hoverClass[taskId] || ""; 
      
      return (
        <Draggable draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`w-full bg-slate-700 p-2 rounded-md shadow-sm `}
              
              title={task.id + "\n" + task.content + "\n" + task.description}
            >
              <p className="text-[10px] font-mono">[{task.id}]</p>
              <p className="text-sm" onMouseEnter={() => handleMouseEnter(taskId)} onMouseLeave={() => handleMouseLeave(taskId)} >{task.content}</p>
              <p className={`text-xs text-text/45 line-clamp-1 hover:line-clamp-none ${ hoverClass[taskId]}`}>
                {task.description}
              </p>
            </div>
          )}
        </Draggable>
      );
    };

    return (
      <div className="bg-slate-800 min-w-40 max-h-64 overflow-y-scroll p-3 rounded-md relative overflow-clip">
        <h3
          className={`text-lg font-semibold mb-4 ${
            column.id === "column-3" ? "text-green-500" : ""
          }`}
        >
          {column.title}
        </h3>

        <Droppable droppableId={column.id}>
          {(provided, snapshot) => {
            const combinedClass = `space-y-4 h-60 ${
              snapshot.isDraggingOver
                ? "bg-slate-600 min-h-full rounded-md"
                : ""
            }`;
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={combinedClass}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-center space-x-4 p-4 relative">
        {tasks.columnOrder.map((columnId) => {
          const column = tasks.columns[columnId];
          const tasksInColumn = column.taskIds.map(
            (taskId) => tasks.tasks[taskId]
          );

          return (
            <Column key={column.id} column={column} tasks={tasksInColumn} />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default BoardExample;
