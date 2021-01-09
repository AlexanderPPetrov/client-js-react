import ClassComponent from '../ClassComponent';
import FunctionalComponent from '../FunctionalComponent';

function Example() {

  const data = [
    {
      title: 'My first functional component',
    },
    {
      title: 'My second functional component',
    },
    {
      title: 'My third functional component',
    },
  ]

  const elements = data.map((element, index) => {
    return <FunctionalComponent 
        key={index}
        title={element.title}
      />
  })

  return (
    <>
        <div className="col-4">
        <ClassComponent/>
        <ClassComponent/>
        <ClassComponent/>
        </div>
        <div className="col-4">
        {elements}
        </div>
    </>
  );
}

export default Example;
