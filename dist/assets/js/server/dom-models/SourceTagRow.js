export class SourceTagRow{constructor(e,t,n,d,o,a){this.row=document.createElement("a");const r=document.createElement("img"),s=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("p");this.row.classList.add("resultado"),this.row.href=t,r.src=n,r.alt="Imagen de la fuente",s.classList.add("resultado__detalles"),c.textContent=e,l.textContent=`Tipo de fuente: ${d}`,this.row.appendChild(r),s.appendChild(c),s.appendChild(l),this.row.appendChild(s)}getRow(){return this.row}}
//# sourceMappingURL=SourceTagRow.js.map
