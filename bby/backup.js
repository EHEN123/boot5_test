window.addEventListener('load',function(){

      const mynavi = this.document.querySelector("#navmenu ul") //배열형 데이터

      mynavi[1].innerHTML = `
      <a href ="${navdata[0].d1href}">
      ${navdata[0].d1text}
      </a>
      `;

      mynavi[2].innerHTML = `
      <a href ="${navdata[1].d1href}">
      ${navdata[1].d1text}
      </a>
      `;

      mynavi[3].innerHTML = `
      <a href ="${navdata[2].d1href}">
      ${navdata[2].d1text}
      </a>
      `;

      mynavi[4].innerHTML = `
      <a href ="${navdata[3].d1href}">
      ${navdata[3].d1text}
      </a>
      `;

      mynavi[5].innerHTML = `
      <a href ="${navdata[4].d1href}">
      ${navdata[4].d1text}
      </a>
      `;

      mynavi[6].innerHTML = `
      <a href ="${navdata[5].d1href}">
      ${navdata[5].d1text}
      </a>
      `;

})
