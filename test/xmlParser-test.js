import test from 'ava';

var XMLParser = require('../xmlParser');

test('parse XML with newline ', t => {
    t.plan(1);

    const xml = `<?xml version=\"1.0\" encoding=\"utf-8\"?><root><date>Monday</date>\n<time>Noon</time></root>`;

    const result = new XMLParser().parseFromString(xml);

    t.is(result.children.length, 2);
});

test('toString XML with newline ', t => {
    t.plan(1);

    const xml = `<?xml version=\"1.0\" encoding=\"utf-8\"?><root><date>Monday</date>\n<time>Noon</time></root>`;

    const nodes = new XMLParser().parseFromString(xml);
    const result = new XMLParser().toString(nodes);

    t.is(result, '<root><date>Monday</date><time>Noon</time></root>');
});

test('toString XML with attribute and newline', t => {
    t.plan(1);

    const xml = `<?xml version=\"1.0\" encoding=\"utf-8\"?><root><date lang=\"de\">Monday</date>\n<time>Noon</time></root>`;

    const nodes = new XMLParser().parseFromString(xml);
    const result = new XMLParser().toString(nodes);

    t.is(result, '<root><date lang=\"de\">Monday</date><time>Noon</time></root>');
});
