

function List() {
    const fruits = [{id: 1, name:"apple", calo: 95}, 
                    {id: 2,name:"banana", calo: 75}, 
                    {id: 3,name:"melon", calo: 195}, 
                    {id: 4,name:"lemon", calo: 55}];
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calo.localeCompare(b.calo)); //NUMERIC
    // fruits.sort((a,b) => b.calo.localeCompare(a.calo)); //REVERSE NUMERIC
    
    const lowCal = fruits.filter(fruit => fruit.calo < 100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.calo}</li>);
    return(
        <ul>{listItems}</ul>
    );
}

export default List;