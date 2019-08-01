function linkBuilder(links){
    // Receive an Array of 'strings' that are the names of nav links
    // Return all the necessary <li> items
    let listhtml = '';

    links.foreach(function(link){
        listhtml += `
      <li>($link)</li>
      `;
    });

    return listhtml;
}


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
    <!--  Navigation to page sections and other pages-->

</ul>
</nav>
`;
}