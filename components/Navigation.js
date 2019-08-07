function linkBuilder(links){
    // Receive an Array of 'strings' that are the names of nav links
    // Return all the necessary <li> items
    console.log(links);

    return links.map((link) =>
    /**
                                An HTML data attribute provides additional information that can be used by JS as a hook.
                                In this case, 'navigo' is something that navigo uses to bind the link 'text' to the   Navigo router.
                                     */
        `<li><a href="/${link.toLowerCase()}"
        data-navigo>${link}</a></li>`
    )
        .join(' ');
}

export default (state) => `
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