import React from 'react';

function Task(prop) {

    return prop.list.map((item, index) => (

        <div className={item.eagerness} key={index}>
          <div>
              {item.text}
          </div>
        </div>
      ));


}


export default Task;