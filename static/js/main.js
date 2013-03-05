$(document).ready(function()
{
    // var table = [ [ 1, 2, 3, 4], [5, 6, 7, 8] ];

    // var html_table = '';
    // html_table += '<table class="pretty">';
    // table.forEach(function(row) 
    // { 
    //     html_table += '<tr>';
    //     row.forEach(function(col)
    //     {
    //         html_table += '<td>' + col + '</td>';
    //     });
    //     html_table += '</tr>';
    // });
    // html_table += '</table>';
    // $('#page').append(html_table); 

    var table = 
    [

        [
            { url: 'https://en.wikipedia.org/w/index.php?search=##QUERY##',    name: 'wikipedia',       icon: 'wikipedia.jpg' },
            { url: 'https://www.khanacademy.org/search?page_search_query=##QUERY##', name: 'khan academy', icon: 'khan-academy.png' },
            { url: 'https://en.wikiversity.org/w/index.php?search=##QUERY##',  name: 'wikiversity',     icon: 'wikiversity.png' },
            { url: 'https://www.youtube.com/education',                        name: 'youtube edu',     icon: 'youtube-edu.png' }, // o.O?
        ],

        [
            { url: 'https://duckduckgo.com/?q=##QUERY##',                      name: 'duckduckgo',      icon: 'duckduckgo.png' },
            { url: 'https://encrypted.google.com/search?q=##QUERY##',          name: 'google',          icon: 'google.png' },
            { url: 'http://www.bing.com/search?q=##QUERY##',                   name: 'bing',            icon: 'bing.png' },
            { url: 'http://search.yahoo.com/search?p=##QUERY##',               name: 'yahoo',           icon: 'yahoo.png' },
            { url: 'http://www.yandex.com/yandsearch?text=##QUERY##',          name: 'yandex',          icon: 'yandex.png' },
            { url: 'http://search.aol.com/aol/search?q=##QUERY##',             name: 'aol',             icon: 'aol.png' },
            { url: 'https://blekko.com/ws/?q=##QUERY##',                       name: 'blekko',          icon: 'blekko.png' },
            { url: 'http://www.sogou.com/web?query=##QUERY##',                 name: 'sogou',           icon: 'sogou.gif' },
            { url: 'http://www.soso.com/q?w=##QUERY##',                        name: 'soso',            icon: 'soso.png' },
            { url: 'http://www.volunia.com/find/web?q=##QUERY##',              name: 'volunisa',        icon: 'volunia.jpg' },
            { url: 'http://www.youdao.com/search?q=##QUERY##',                 name: 'youdao',          icon: 'youdao.gif' },
            { url: 'http://hakia.com/web?q=##QUERY##',                         name: 'hakia',           icon: 'hakia.png' },
        ],                                                                                              
                                                                                                        
        [                                                                                               
            { url: 'http://api.jquery.com/?s=##QUERY##',                       name: 'jquery',          icon: 'jquery.png' },
            { url: 'https://developer.mozilla.org/en-US/search?q=##QUERY##',   name: 'mdn',             icon: 'mdn.jpg' },
            { url: 'http://social.msdn.microsoft.com/search/en-us/ie/?query=##QUERY##&Refinement=61', name: 'msdn', icon: 'msdn.jpg' },
        ],

        [
            { url: 'https://metacpan.org/search?q=##QUERY##',                  name: 'cpan',            icon: 'cpan.jpg' },
            { url: 'http://www.php.net/manual-lookup.php?pattern=##QUERY##&lang=en&scope=quickref', name: 'php', icon: 'php.jpg' },
            { url: 'http://docs.python.org/3/search.html?q=##QUERY##&check_keywords=yes&area=default', name: 'python', icon: 'python.png' },
            { url: 'http://ruby-doc.com/search.html?&q=##QUERY##',             name: 'ruby',            icon: 'ruby.png' },
        ],
        
        [
            { url: 'https://www.youtube.com/results?search_query=##QUERY##',   name: 'youtube',         icon: 'youtube.png' },
            { url: 'http://www.imdb.com/find?q=##QUERY##&s=all',               name: 'imdb',            icon: 'imdb.png' },
            { url: 'https://encrypted.google.com/search?q=##QUERY##&tbm=isch', name: 'google pictures', icon: 'google-pictures.jpg' },
            { url: 'https://encrypted.google.com/search?q=##QUERY##&tbm=blg',  name: 'blog',            icon: 'blog.gif' },
            { url: 'http://regator.com/search/##QUERY##',                      name: 'regator',         icon: 'regator.jpg' },
        ],

        [
            { url: 'http://evi.com/q/##QUERY##',                               name: 'evi',             icon: 'evi.png' },
            { url: 'http://www.wolframalpha.com/input/?i=##QUERY##',           name: 'wolframalpha',    icon: 'wolframalpha.png' },
        ],

        [
            { url: 'https://en.wikibooks.org/w/index.php?search=##QUERY##',    name: 'wikibooks',       icon: 'wikibooks.png' },
            { url: 'https://encrypted.google.com/search?q=##QUERY##&tbm=bks',  name: 'google books',           icon: 'google-books.png' },
            { url: 'http://www.amazon.com/s/?url=search-alias%3Dstripbooks&field-keywords=##QUERY##', name: 'amazon books', icon: 'amazon-books.png' },
        ],

        [
            { url: 'https://en.wiktionary.org/wiki/##QUERY##',                 name: 'wiktionary',      icon: 'wiktionary.png' },
            { url: 'http://www.thefreedictionary.com/##QUERY##',               name: 'the free dictionary', icon: 'the-free-dictionary.png' },
            { url: 'http://dictionary.reference.com/browse/##QUERY##',         name: 'dictioanry reference', icon: 'dictionary-reference.png' },
            { url: 'http://www.merriam-webster.com/dictionary/##QUERY##',      name: 'merriam webster',      icon: 'merriam-webster.png' },
            { url: 'http://oxforddictionaries.com/definition/english/exuberant?q=##QUERY##', name: 'oxford dictionary', icon: 'oxford-dictionary.jpg' },
            { url: 'http://www.urbandictionary.com/define.php?term=##QUERY##', name: 'urban dictionary', icon: 'urban-dictionary.png' },
            { url: 'http://www.wordreference.com/definition/##QUERY##',        name: 'word reference',  icon: 'word-reference.png' },
            { url: 'http://www.vocabulary.com/dictionary/##QUERY##',           name: 'vocabulary',      icon: 'vocabulary.png' },
        ],

        [
            { url: 'http://www.answers.com/search?q=##QUERY##',                name: 'answers',         icon: 'answers.png' },
            { url: 'http://answers.yahoo.com/search/search_result?p=##QUERY##&submit-go=Search+Y!+Answers', name: 'yahoo answers', icon: 'yahoo-answers.jpg' },
            { url: 'http://www.wikihow.com/Special:GoogSearch?cx=008953293426798287586%3Amr-gwotjmbs&cof=FORID%3A10&&q=##QUERY##&siteurl=www.wikihow.com%2FMain-Page', name: 'wikianswers', icon: 'wikihow.jpg' },
            { url: 'http://www.ehow.com/search.html?s=##QUERY##&t=all',        name: 'ehow',            icon: 'ehow.jpg' },
        ],

        [
            { url: 'http://www.sportal.bg/search.php?search=##QUERY##&search_simple=Намери+в+Sportal', name: 'sportal', icon: 'sportal.png' },
        ],

        [
            { url: 'http://harvester.kit.edu/jss/special/harvester42?tabNum=1&searchTerm=##QUERY##', name: 'harvester42', icon: 'harvester42.png' },
            { url: 'http://search.yippy.com/search?query=##QUERY##',           name: 'yippy',           icon: 'yippy.png' },
            { url: 'http://deeperweb.com/results.php?cx=!004415538554621685521%3Avgwa9iznfuo&cof=FORID%3A11%3BNB%3A1&ie=UTF-8&q=##QUERY##&as_qdr=&siteurl=http%3A%2F%2Fdeeperweb.com%2F', name: 'deeperweb', icon: 'deeperweb.png' },
            { url: 'http://www.dogpile.com/info.dogpl/search/web?q=##QUERY##', name: 'dogpile',         icon: 'dogpile.jpg' },
            { url: 'http://msxml.excite.com/search/web?q=##QUERY##',           name: 'excite',          icon: 'excite.png' },
            { url: 'http://www.info.com/searchw?qkw=##QUERY##',                name: 'info.com',        icon: 'info-dot-com.png' },
            { url: 'http://www.metacrawler.com/search/web?q=##QUERY##',        name: 'metacrawler',     icon: 'metacrawler.png' },   
            { url: 'http://www.webcrawler.com/search/web?q=##QUERY##',         name: 'webcrawler',      icon: 'webcrawler.png' },
        ],
    ];

    var html_table = '';
    html_table += '<table class="pretty">';
    table.forEach(function(row, i) 
    { 
        html_table += '<tr>';
        row.forEach(function(e, j)
        {
            html_table += '<td>' 
                        + '<a id="' + i + '-' + j + '"' + 'href="' + '#" target="" >'
                        + '<img '
                        + 'src="static/pics/icons/' + e.icon + '" ' 
                        + 'alt="' + e.name + '" '
                        + 'title="' + e.name + '"'
                        + 'width="48" height="48"'
                        + ' />'
                        + '</a>'
                        + '</td>'
                        ;
        });
        html_table += '</tr>';
    });
    html_table += '</table>';
    $('#page').append(html_table); 


    $('#query')
        .bind('input', function()
        {
            var query = $(this).val();

            table.forEach(function(row, i)
            {
                row.forEach(function(e, j)
                {
                    $('#' + i + '-' + j).attr('href', query === '' ? '#' : table[i][j].url.replace('##QUERY##', query));

                });
            });       
        })
        .dblclick(function() { $(this).val(''); $(this).trigger('input'); })
        .val('')
        .focus()
        ;

    $('td').mousedown(function(){ setTimeout(function(){ $('#query').focus(); }, 0); });

});
