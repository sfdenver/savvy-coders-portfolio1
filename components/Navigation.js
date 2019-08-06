function linkBuilder(links){
    // Receive an Array of 'strings' that are the names of nav links
    // Return all the necessary <li> items
    console.log(links);
    
return links.map(function linkLister(link){
        /**
                    An HTML data attribute provides additional information that can be used by JS as a hook.
                    In this case, 'navigo' is something that navigo uses to bind the link 'text' to the   Navigo router.
                         */
        return `<li><a href="/${link.toLowerCase()}"
        data-navigo>${link}</a></li>`;
    })
        .join(' ');
}

/**
    let listhtml = '';
    links.forEach(function(link){
        listhtml += `
      <li>$link</li>
      `;
    });
    return listhtml;
*/

export default function(state){
    return `
<nav>
    <ul>
        ${linkBuilder(state.links.primary)}
        <li class="dropdown">
        Portfolio
        <ul>
            ${linkBuilder(state.links.dropdown)}
        </ul>
        </li>
    </ul>
  </nav>
`;
}