let techRadar = {
	"Meta": {
	  "generatedAt": new Date()
	},
	"TechRadar": {
	  "Techniques": ["Micro Frontends", "Polyglot programming", "Secrets as a service", "Chaos Engineering"],
	  "Tools": ["Cypress", "Helm", "Traefik", "Humio"],
	  "Platforms": ["Contentful", "AWS Fargate", "InfluxDB"],
	  "Languages & Frameworks": ["TypeScript", "Rust"]
  }
};

var div = document.createElement("div");
div.innerHTML = techRadar.Meta.generatedAt;
document.body.appendChild(div);

let headUl = document.createElement('ul');

for (var group in techRadar.TechRadar) {
    let li = document.createElement('li');
    li.innerHTML = group;
    let innerUL = document.createElement('ul');
    
    for (var text in techRadar.TechRadar[group]) {
        let innerLI = document.createElement('li');
        innerLI.innerHTML = techRadar.TechRadar[group][text];
        innerUL.appendChild(innerLI);
    }
    
    li.appendChild(innerUL);
    headUl.appendChild(li);
}
document.body.appendChild(headUl);