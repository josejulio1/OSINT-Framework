import{END_POINTS}from"./server/end-points.js";import{SourceTagRow}from"./server/dom-models/SourceTagRow.js";import{V_SOURCE_TAG}from"./server/orm/models.js";const $tagObtener=document.getElementById("tag-obtener"),$tabBuscar=document.getElementById("tag-buscar"),$buscar=document.getElementById("buscar"),$resultados=document.getElementById("resultados"),$tipoFuente=document.getElementById("tipo-fuente"),$noResultados=document.getElementById("no-resultados");$buscar.addEventListener("click",(async()=>{const{value:e}=$tipoFuente,t={tagObtener:$tagObtener.value,tagBuscar:$tabBuscar.value,tipoFuente:"todos"!==e?e:null},o=await fetch(END_POINTS.SEARCH_SOURCE,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((e=>e.json()));if($resultados.innerHTML="",$noResultados.classList.add("hide"),0===o.length)return $noResultados.classList.remove("hide"),void($noResultados.textContent="No se encontraron resultados");const n=document.createDocumentFragment();for(const e of o)n.appendChild(new SourceTagRow(e[V_SOURCE_TAG.NAME],e[V_SOURCE_TAG.WEB_URL],e[V_SOURCE_TAG.IMAGE_PATH],e[V_SOURCE_TAG.TYPE_SOURCE],e[V_SOURCE_TAG.PUEDE_BUSCAR],e[V_SOURCE_TAG.PUEDE_OBTENER]).getRow());$resultados.appendChild(n),$resultados.scrollTo()}));
//# sourceMappingURL=search.js.map
