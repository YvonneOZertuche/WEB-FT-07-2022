let data = JSON.parse(`
[
    {
    "id": 4460,
    "uid": "62409e76-b30c-4da9-bfc6-1b48c47cd220",
    "blend_name": "Pumpkin-spice Blend",
    "origin": "Embu, Kenya",
    "variety": "S795",
    "notes": "bright, syrupy, sugar cane, tobacco, lemonade",
    "intensifier": "crisp"
    },
    {
    "id": 4557,
    "uid": "22de5a1f-92b8-4723-9997-b50e90bf4bd2",
    "blend_name": "Thanksgiving Bean",
    "origin": "Jalisco, Mexico",
    "variety": "Dega",
    "notes": "lingering, coating, milk chocolate, green apple, carbon",
    "intensifier": "quick"
    },
    {
    "id": 8043,
    "uid": "f91facbe-7aa5-4fd9-874e-ab99aca61cda",
    "blend_name": "Major Coffee",
    "origin": "Lintong, Sumatra",
    "variety": "SL34",
    "notes": "wild, smooth, raisin, sundried tomato, wheat",
    "intensifier": "structured"
    },
    {
    "id": 2568,
    "uid": "bd729557-9e92-49db-8b78-5b57190ffa43",
    "blend_name": "Green Delight",
    "origin": "Alotepec-Metapán, El Salvador",
    "variety": "Sarchimor",
    "notes": "deep, coating, star fruit, cherry, lychee",
    "intensifier": "pointed"
    },
    {
    "id": 138,
    "uid": "6fecc118-5d78-4b0f-b64e-f0184e758cb3",
    "blend_name": "Café Utopia",
    "origin": "Volcan, Panama",
    "variety": "Gimma",
    "notes": "balanced, round, soy sauce, leathery, granola",
    "intensifier": "dense"
    },
    {
    "id": 86,
    "uid": "475618c7-66a2-4bf1-9b8d-1d4abcb322af",
    "blend_name": "Thanksgiving Solstice",
    "origin": "Mattari, Yemen",
    "variety": "Obata",
    "notes": "tart, silky, orange, mushroom, cinnamon",
    "intensifier": "clean"
    },
    {
    "id": 7144,
    "uid": "fef80a6c-b511-4bf3-bfc4-978cde0237c1",
    "blend_name": "Seattle Level",
    "origin": "Veracruz, Mexico",
    "variety": "Kaffa",
    "notes": "astringent, big, black-tea, honeysuckle, sundried tomato",
    "intensifier": "bright"
    },
    {
    "id": 1701,
    "uid": "f1cf5112-d1a3-4e83-ad89-10541c082ac6",
    "blend_name": "Cascara Choice",
    "origin": "Veracruz, Mexico",
    "variety": "Typica",
    "notes": "structured, slick, strawberry, cherry, maple syrup",
    "intensifier": "juicy"
    },
    {
    "id": 7688,
    "uid": "3e8ab13f-e52a-4c3f-8a5d-216cfb4cc0d8",
    "blend_name": "The Captain's Light",
    "origin": "Western Region, Bukova, Tanzania",
    "variety": "Tafari-Kela",
    "notes": "soft, chewy, sage, honeysuckle, bittersweet chocolate",
    "intensifier": "deep"
    },
    {
    "id": 2634,
    "uid": "cd0b66ff-bd45-4c21-b661-9a890870d314",
    "blend_name": "Hello Star",
    "origin": "Tapanuli, Sumatra",
    "variety": "Caturra",
    "notes": "pointed, chewy, green-tea, graham cracker, golden raisin",
    "intensifier": "dry"
    },
    {
    "id": 4787,
    "uid": "155f7fa0-4826-4b55-983f-8916cf625698",
    "blend_name": "Huggy Star",
    "origin": "Bugisu, Uganda",
    "variety": "Barbuk Sudan",
    "notes": "dry, chewy, medicinal, vanilla, wheat",
    "intensifier": "juicy"
    },
    {
    "id": 523,
    "uid": "4fe1c12c-2d79-4bca-aa16-e64bc6440c8d",
    "blend_name": "Seattle Coffee",
    "origin": "Cerrado, Brazil",
    "variety": "S.4",
    "notes": "rounded, silky, red grape, banana, mint",
    "intensifier": "balanced"
    },
    {
    "id": 4961,
    "uid": "2d54fcd7-568c-4080-b911-26f594b2fd79",
    "blend_name": "Chocolate Blend",
    "origin": "San'ani, Yemen",
    "variety": "Kona",
    "notes": "quick, coating, brown sugar, pecan, passion fruit",
    "intensifier": "astringent"
    },
    {
    "id": 3847,
    "uid": "96599ccf-006d-43d6-a0ae-27c00361f0dc",
    "blend_name": "Bluebery ",
    "origin": "Embu, Kenya",
    "variety": "Java",
    "notes": "dull, full, raspberry, walnut, fresh wood",
    "intensifier": "juicy"
    },
    {
    "id": 5762,
    "uid": "15ad09ad-1b97-4044-a358-907a4c311cc3",
    "blend_name": "Heart Star",
    "origin": "Antigua, Guatemala",
    "variety": "Kona",
    "notes": "dull, big, strawberry, grassy, clove",
    "intensifier": "pointed"
    },
    {
    "id": 5730,
    "uid": "836a82dd-da47-422c-9595-93eeb9353797",
    "blend_name": "Veranda Mug",
    "origin": "Mount Elgon, Uganda",
    "variety": "Typica",
    "notes": "wild, velvety, ginger, walnut, red apple",
    "intensifier": "faint"
    },
    {
    "id": 5056,
    "uid": "01b98e17-8f1d-4a1c-a495-54d847794105",
    "blend_name": "Hello Select",
    "origin": "Boquete, Panama",
    "variety": "Colombia",
    "notes": "tart, full, barley, black-tea, red grape",
    "intensifier": "dry"
    },
    {
    "id": 9572,
    "uid": "afe84349-86ad-4fb4-aa09-5b0cc9b94595",
    "blend_name": "Cascara Level",
    "origin": "Hirazi, Yemen",
    "variety": "Sumatara",
    "notes": "soft, juicy, mango, nectarine, walnut",
    "intensifier": "quick"
    },
    {
    "id": 4620,
    "uid": "8c1c8a9e-704f-4c59-a88b-2bb1dc8e07ee",
    "blend_name": "Major Delight",
    "origin": "Bugisu, Uganda",
    "variety": "Mundo Novo",
    "notes": "pointed, round, sundried tomato, golden raisin, graham cracker",
    "intensifier": "bright"
    },
    {
    "id": 9087,
    "uid": "d9a48338-5def-4136-9222-b7dfb4763efd",
    "blend_name": "Bluebery Cake",
    "origin": "Sul Minas, Brazil",
    "variety": "Gesha",
    "notes": "clean, watery, magnolia, cacao nibs, bittersweet chocolate",
    "intensifier": "tart"
    },
    {
    "id": 6576,
    "uid": "9d369f2c-cd44-42ac-b2e9-342526a769a6",
    "blend_name": "Kreb-Full-o Coffee",
    "origin": "Mount Elgon, Uganda",
    "variety": "Ennarea",
    "notes": "quick, silky, quakery, passion fruit, honeysuckle",
    "intensifier": "muted"
    },
    {
    "id": 2792,
    "uid": "7f078dd7-730c-4123-9690-42c58ce1aab0",
    "blend_name": "Hello Equinox",
    "origin": "Lintong, Sumatra",
    "variety": "Sarchimor",
    "notes": "soft, slick, medicinal, mango, lemon",
    "intensifier": "vibrant"
    },
    {
    "id": 8177,
    "uid": "3aaad8aa-52cb-440b-844e-5a04e6bc8e37",
    "blend_name": "Summer Cup",
    "origin": "Sul Minas, Brazil",
    "variety": "Dilla",
    "notes": "delicate, full, prune, clove, orange creamsicle",
    "intensifier": "complex"
    },
    {
    "id": 4568,
    "uid": "74d9fc35-3e64-4419-a603-31cd30631c6e",
    "blend_name": "Split Volcano",
    "origin": "Mattari, Yemen",
    "variety": "Red Bourbon",
    "notes": "clean, slick, figs, green pepper, burnt sugar",
    "intensifier": "juicy"
    },
    {
    "id": 2730,
    "uid": "5054dca7-c7b3-493d-8370-6d7acccabbdb",
    "blend_name": "Reg's Cake",
    "origin": "Kayanza, Burundi",
    "variety": "Yellow Bourbon",
    "notes": "soft, chewy, dill, passion fruit, bittersweet chocolate",
    "intensifier": "quick"
    }
    ]

`)

module.exports = data;