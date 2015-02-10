var React = require('react');
var Router = require('react-router');

var DemoLightbox = React.createClass({
    render: function() {
        return <div>I'm a lightbox!</div>;
    }
});

var lightboxes = {
    'demoLightbox': DemoLightbox
};

var RoutedLightbox = React.createClass({

    mixins: [Router.State],

    render: function() {
        var query = this.getQuery();

        if (!query['lightbox'] || !lightboxes[query['lightbox']]) {
            return null;
        }

        return (
            <div>
                <div className="background" />
                <div className="lightbox">
                    {React.createElement(lightboxes[query['lightbox']])}
                </div>
            </div>
        );
    }
});

var routes = (
    <Router.Route name="lightbox" path="/" handler={RoutedLightbox} />
);

var div = document.createElement('div');
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, div);
});
document.body.appendChild(div);
