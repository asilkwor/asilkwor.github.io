function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
var choice=4;
if (choice==1){
  document.getElementById("p1").innerHTML = "All Hate Crimes Crime Ratio (Per 100,000)";
var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Overall
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#D4EEFF", "#0099FF"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Overall = +d.Overall;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Overall);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Overall) {

    console.log(usa);
    console.log(Overall);

    colorScale.domain(d3.extent(Overall, function(d) {return d.Overall;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
      }
}else if(choice==2){
  document.getElementById("p1").innerHTML = "Race Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Race
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#edf8e9", "#238b45"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Race = +d.Race;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Race);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Race) {

    console.log(usa);
    console.log(Race);

    colorScale.domain(d3.extent(Race, function(d) {return d.Race;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==3){
  document.getElementById("p1").innerHTML = "Religion Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Religion
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(900) // mess with this if you want
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#feedde", "#d94701"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Religion = +d.Religion;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Religion);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Religion) {

    console.log(usa);
    console.log(Religion);

    colorScale.domain(d3.extent(Religion, function(d) {return d.Religion;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==4){
  document.getElementById("p1").innerHTML = "Sexual Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Sexual
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#f2f0f7", "#6a51a3"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Sexual = +d.Sexual;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Sexual);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Sexual) {

    console.log(usa);
    console.log(Sexual);

    colorScale.domain(d3.extent(Sexual, function(d) {return d.Sexual;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==5){
  document.getElementById("p1").innerHTML = "Ethnicity Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Ethnicity
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#fee5d9", "#cb181d"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Ethnicity = +d.Ethnicity;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Ethnicity);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Ethnicity) {

    console.log(usa);
    console.log(Ethnicity);

    colorScale.domain(d3.extent(Ethnicity, function(d) {return d.Ethnicity;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==6){
  document.getElementById("p1").innerHTML = "Disability Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Disability
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#f7f7f7", "#525252"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Disability = +d.Disability;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Disability);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Disability) {

    console.log(usa);
    console.log(Disability);

    colorScale.domain(d3.extent(Disability, function(d) {return d.Disability;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==7){
  document.getElementById("p1").innerHTML = "Gender Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.Gender
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#f2f0f7", "#6a51a3"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.Gender = +d.Gender;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.Gender);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, Gender) {

    console.log(usa);
    console.log(Gender);

    colorScale.domain(d3.extent(Gender, function(d) {return d.Gender;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}else if(choice==8){
  document.getElementById("p1").innerHTML = "Gender Identification Hate Crimes Crime Ratio (Per 100,000)";
  var width = 900;
    height = 700;

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-5, 0])
  .html(function(d) {
    var dataRow = countryById.get(d.properties.name);
       if (dataRow) {
           console.log(dataRow);
           return dataRow.states + ": " + dataRow.GenderID
       } else {
           console.log("no dataRow", d);
           return d.properties.name + ": No data.";
       }
  })


var svg = d3.select('#vis').append('svg')
    .attr('width', width)
    .attr('height', height);

svg.call(tip);

var projection = d3.geo.albersUsa()
    .scale(1000) // mess with this if you want
    .translate([width / 2, height / 3.2]);

var path = d3.geo.path()
    .projection(projection);

var colorScale = d3.scale.linear().range(["#f7f7f7", "#525252"]).interpolate(d3.interpolateLab);

var countryById = d3.map();

// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "USA.json")
    .defer(d3.csv, "mortality.csv", typeAndSet) // process
    .await(loaded);

function typeAndSet(d) {
    d.GenderID = +d.GenderID;
    countryById.set(d.states, d);
    return d;
}

function getColor(d) {
    var dataRow = countryById.get(d.properties.name);
    if (dataRow) {
        console.log(dataRow);
        return colorScale(dataRow.GenderID);
    } else {
        console.log("no dataRow", d);
        return "#ccc";
    }
}


function loaded(error, usa, GenderID) {

    console.log(usa);
    console.log(GenderID);

    colorScale.domain(d3.extent(GenderID, function(d) {return d.GenderID;}));

    var states = topojson.feature(usa, usa.objects.units).features;

    svg.selectAll('path.states')
        .data(states)
        .enter()
        .append('path')
        .attr('class', 'states')
        .attr('d', path)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
        .attr('fill', function(d,i) {
            console.log(d.properties.name);
            return getColor(d);
        })
        .append("title");

    var linear = colorScale;

    svg.append("g")
      .attr("class", "legendLinear")
      .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
      .shapeWidth(30)
      .orient('horizontal')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);
}
}