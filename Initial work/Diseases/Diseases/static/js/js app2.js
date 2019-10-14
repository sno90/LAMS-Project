var tableData = data;

d3.selectAll("filter-btn").on("click", handleClick);

function buidTable(somedata){
    let tbody = d3.select("tbody");
    tbody.html("");

    somedata.forEach(row=> {

        let tr = tbody.append("tr");

        Object.values(row).forEach(cell => {
            let c = tr.append("td");
            c.text(cell);
        });
    });
}