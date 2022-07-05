function routeChange(route){

    let routeChangeEvent = new CustomEvent('onroutechange', {detail:{route}});
    document.dispatchEvent(routeChangeEvent);
    return history.pushState('','',route);

}

export { routeChange };