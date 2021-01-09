let rowNum = 0;
let columnNum = 0;
let currentColor = "white";
let checker = false;


function addRow()
{
    let table = document.getElementById("grid");
  
    if(rowNum == 0 && columnNum == 0)
    {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let rowName = `row0`;
        row.setAttribute("id", rowName);
        row.classList.add(rowName); //add a class to the row
        table.appendChild(row); //add a row into the table
        let cellName = `cell${rowNum},${columnNum}`;
        cell.setAttribute("id", cellName);
        cell.classList.add(cellName);  
        cell.style.backgroundColor = currentColor;
        cellColorChange(cell);  
        row.appendChild(cell); 
        rowNum++;
        columnNum++;
    }else{
            if(columnNum === 1)
            {
                let row = document.createElement("tr");
                let cell = document.createElement("td");
                let rowName = `row${rowNum}`;
                row.setAttribute("id", rowName);
                row.classList.add(rowName); //add a class to the row
                table.appendChild(row); //add a row into the table
                let cellName = `cell${rowNum},${0}`;
                cell.setAttribute("id", cellName);
                cell.classList.add(cellName); 
                cell.style.backgroundColor = currentColor;
                cellColorChange(cell)
                row.appendChild(cell); 
                rowNum++;
            }else if(columnNum >= 1)
            {
                // let cell = document.createElement("td");
                let row = document.createElement("tr");
                let rowName = `row${rowNum}`;
                row.setAttribute("id", rowName);
                row.classList.add(rowName); //add a class to the row
                table.appendChild(row); //add a row into the table
                for(let i = 0; i < columnNum; i++)
                {
                    let cell = document.createElement("td");
                    let cellName = `cell${rowNum},${i}`;
                    cell.setAttribute("id", cellName);
                    cell.classList.add(cellName); 
                    cell.style.backgroundColor = currentColor;
                    cellColorChange(cell)
                    row.appendChild(cell); 
                }
                rowNum++;
            }
    }
}

function addColumn()
{
    let table = document.getElementById("grid");

    if(rowNum == 0 && columnNum == 0)
    {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let rowName = `row0`;
        row.setAttribute("id", rowName);
        row.classList.add(rowName); //add a class to the row
        table.appendChild(row); //add a row into the table
        let cellName = `cell${rowNum},${columnNum}`;
        cell.setAttribute("id", cellName);
        cell.classList.add(cellName); 
        cell.style.backgroundColor = currentColor;
        cellColorChange(cell)
        row.appendChild(cell); 
        rowNum++;
        columnNum++;
    }else{
        if(rowNum === 1)
        {
            let row = document.getElementById("row0");
            let cell = document.createElement("td");
            let cellName = `cell${0},${columnNum}`;
            cell.setAttribute("id", cellName);
            cell.classList.add(cellName); 
            cell.style.backgroundColor = currentColor;
            cellColorChange(cell)
            row.appendChild(cell); 
            columnNum++;
        }else if(rowNum >= 1)
        {
            for(let i = 0; i < rowNum; i++)
            {
                let rowName1 =`row${i}`;
                let row = document.getElementById(`row${i}`);
                let cell = document.createElement("td");
                let cellName = `cell${i},${columnNum}`;
                cell.setAttribute("id", cellName);
                cell.classList.add(cellName); 
                cell.style.backgroundColor = currentColor;
                cellColorChange(cell)
                row.appendChild(cell); 
            }
            columnNum++;
        }
    }
}

function removeRows()
{
    if(rowNum === 0)
    {
        alert("There is no more rows to be removed!");
        columnNum = 0;
    }else{
        let currentRowIndex = rowNum - 1;
        let row = document.getElementById(`row${currentRowIndex}`).remove();
        rowNum--;
    }
}

function removeColumns()
{
    if(columnNum === 0)
    {
        alert("There is no more columns to be removed!");
        
        for(let i = 0; i < rowNum; i++)
        {
            let row = document.getElementById(`row${i}`).remove();
        }

        rowNum = 0;

    }else{
        
        let currentRowIndex = rowNum - 1;
        let currentColumnIndex = columnNum - 1;
        for(let i = currentRowIndex; i >= 0; i--)
        {
            let cell = document.getElementById(`cell${i},${currentColumnIndex}`).remove();
        }
        columnNum--;
    }
}

function pickColor(id)
{
    currentColor = id.toLowerCase();    
}

function fillAllCells()
{
    for(let i = 0; i < rowNum; i++)
    {
        for(let j = 0; j < columnNum; j++)
        {
            let cell = document.getElementById(`cell${i},${j}`);
            cell.style.backgroundColor = currentColor;
        }   
    }
}

function clearAllCells()
{
    for(let i = 0; i < rowNum; i++)
    {
        for(let j = 0; j < columnNum; j++)
        {
            let cell = document.getElementById(`cell${i},${j}`);
            cell.style.backgroundColor = "white";
        }   
    }
}

function fillUncoloredCells()
{
    for(let i = 0; i < rowNum; i++)
    {
        for(let j = 0; j < columnNum; j++)
        {
            let cell = document.getElementById(`cell${i},${j}`);
            var color = cell.style.backgroundColor;
            if(color != currentColor)
            {
                cell.style.backgroundColor = currentColor;
            }
            
        }   
    }
}

function cellColorChange(cell)
{
    cell.addEventListener("mousedown", function()
    {
        var color = cell.style.backgroundColor;
        console.log(color);
        console.log(currentColor);
        
        if(color.toLowerCase() != currentColor.toLowerCase())
        {
            cell.style.backgroundColor = currentColor;
            
        }else if(color == currentColor){
            cell.style.backgroundColor = "white";
        }
    })
    
};