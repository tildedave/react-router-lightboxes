var React = require('react');
var Router = require('react-router');

var RoutedLightbox = React.createClass({

    mixins: [Router.State],

    render: function() {
        if (this.isActive('no-lightbox')) {
            return null;
        }

        return (
            <div>
                <div className="background" />
                <div className="lightbox">
                    <Router.RouteHandler />
                </div>
            </div>
        );
    }
});

var NoLightbox = React.createClass({
    render: function() {
        return null;
    }
});

var DemoLightbox = React.createClass({
    render: function() {
        return <div>I'm a lightbox!</div>;
    }
});

var routes = (
    <Router.Route name="lightbox" handler={RoutedLightbox}>
        <Router.Route name="no-lightbox" path="/" handler={NoLightbox} />
        <Router.Route name="demo-lightbox" path="/demoLightbox" handler={DemoLightbox} />
    </Router.Route>
);

var div = document.createElement('div');
Router.run(routes, Router.HashLocation, function(Handler) {
    React.render(<Handler />, div);
});
document.body.appendChild(div);
