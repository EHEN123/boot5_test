window.addEventListener('load',function(){

      const mynavi = this.document.querySelector("#navmenu ul"); //배열형 데이터

      let mytag = '';

      for( x in navdata){
        mytag += `<li>
              <a
                href="${navdata[x].d1href}"
                target="${navdata[x].__target}">
                ${navdata[x].d1text}
                </a>
                </li>
                `;
      }

      mynavi.innerHTML = mytag;

})
