$( document ).ready( function() {
    var entries = [
        { label: '莫恒辉' },
        { label: 'Bootstrap', target: '_top' },
        { label: '算法',target: '_top' },
        { label: '网页开发', target: '_top' },
        { label: 'MYSQL', url: '#', target: '_top' },
        { label: '深度学习', url: '#', target: '_top' },
        { label: '机器学习', url: '', target: '_top' },
        { label: 'Python', url: '#', target: '_top' },
        { label: 'C++', url: '', target: '_top' },
        { label: 'C', url: '', target: '_top' },
        { label: 'Unity 3D', target: '_top' },
        { label: 'C#',  target: '_top' },
        { label: 'JAVA', url: '#', target: '_top' },
        { label: 'JSP', target: '_top' },
        { label: 'JAVA WEB', target: '_top' },
        { label: 'CTF',  target: '_top' },
        { label: 'ACM',  target: '_top' },
        { label: 'OPENCV',  target: '_top' },
        { label: 'PYTOUCH',  target: '_top' },
        { label: '爬虫', url: '#', target: '_top' },
        { label: 'sql注入',  target: '_top' },
        { label: 'GO', target: '_top' },
        { label: 'PHP',  target: '_top' },
        { label: 'VB', target: '_top' },
        { label: 'RUBY', target: '_top' },
        { label: 'jQuery', target: '_top' },
        { label: 'SAS', url: '#', target: '_top' },
        { label: 'MATLAB', url: '#', target: '_top' }
    ];

    var settings = {

        entries: entries,
        width: 300,
        height: 300,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#00000000',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#808080',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#tag-cloud' ).svg3DTagCloud( settings );
    $('#tag-cloud').click(function (event) {
        event.preventDefault();
    })
} );
