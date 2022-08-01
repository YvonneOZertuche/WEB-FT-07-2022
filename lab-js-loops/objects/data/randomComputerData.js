let data = JSON.parse(`
[
    {
    "id": 1222,
    "uid": "7de9920c-c449-47e0-b3d9-a8b8eb788969",
    "platform": "Windows",
    "type": "workstation",
    "os": "Windows 7",
    "stack": "Linux, Ubuntu Desktop 18.04"
    },
    {
    "id": 2197,
    "uid": "2f27caac-db34-47a8-964e-55e0198181ef",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows Server 2012 R2",
    "stack": "Windows, Windows Server 2019"
    },
    {
    "id": 1738,
    "uid": "59bde39e-8859-4764-b9c1-56a26badf18d",
    "platform": "Windows",
    "type": "server",
    "os": "Catalina (10.15)",
    "stack": "macOS, Catalina (10.15)"
    },
    {
    "id": 424,
    "uid": "a59d3510-83c3-4b50-a04a-a79a8909822e",
    "platform": "Windows",
    "type": "server",
    "os": "Windows 8.1",
    "stack": "Windows, Windows 10"
    },
    {
    "id": 4476,
    "uid": "1491cf07-d978-47b9-be11-3c2990efe90b",
    "platform": "macOS",
    "type": "server",
    "os": "openSUSE Leap 15.1",
    "stack": "macOS, High Sierra (10.13)"
    },
    {
    "id": 1706,
    "uid": "421a1e3a-22ed-4b88-b3f9-fdcf493106ce",
    "platform": "Linux",
    "type": "workstation",
    "os": "Windows 8.1",
    "stack": "macOS, Mojave (10.14)"
    },
    {
    "id": 7670,
    "uid": "24f3a05b-ef44-48e5-944e-533d49695109",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows 8.1",
    "stack": "macOS, Mojave (10.14)"
    },
    {
    "id": 2489,
    "uid": "c25ab6e5-b629-4d2e-9bb6-0ab0320365df",
    "platform": "Windows",
    "type": "workstation",
    "os": "Ubuntu Desktop 18.04",
    "stack": "Windows, Windows Server 2012 R2"
    },
    {
    "id": 536,
    "uid": "526f60d9-3b25-4ccb-8fbe-6c72956bb916",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows 7",
    "stack": "Windows, Windows Server 2019"
    },
    {
    "id": 7677,
    "uid": "ebe4bb81-2fb2-4506-a5af-e0dc2351e7d6",
    "platform": "macOS",
    "type": "server",
    "os": "Debian 9.9.10",
    "stack": "Windows, Windows Server 2019"
    },
    {
    "id": 4323,
    "uid": "016e56df-6920-40d5-98d2-526e696d1fbc",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows Server 2016",
    "stack": "macOS, Catalina (10.15)"
    },
    {
    "id": 9940,
    "uid": "c9658c22-fecc-4fad-b466-2ebaf64bf9b3",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows Server 2019",
    "stack": "macOS, High Sierra (10.13)"
    },
    {
    "id": 2608,
    "uid": "147c8475-289a-45a9-8f82-d7e207e0f625",
    "platform": "Windows",
    "type": "server",
    "os": "Windows Server 2016",
    "stack": "Linux, Ubuntu Server 19.10"
    },
    {
    "id": 1428,
    "uid": "64f179a5-d1f1-49da-a1f1-caa8ca95d024",
    "platform": "Windows",
    "type": "workstation",
    "os": "Windows 10",
    "stack": "Linux, openSUSE Leap 15.1"
    },
    {
    "id": 5792,
    "uid": "823003a0-d247-4361-a207-cf451042f059",
    "platform": "Linux",
    "type": "workstation",
    "os": "Ubuntu Server 18.04",
    "stack": "Windows, Windows Server 2012 R2"
    },
    {
    "id": 1237,
    "uid": "1da73099-d1cc-4df1-b4d2-ecc6d3c3ad7d",
    "platform": "Linux",
    "type": "server",
    "os": "Windows 10",
    "stack": "macOS, Catalina (10.15)"
    },
    {
    "id": 50,
    "uid": "866f0fbc-54a4-47f3-a9fc-2cfd231e061c",
    "platform": "macOS",
    "type": "server",
    "os": "High Sierra (10.13)",
    "stack": "Linux, openSUSE Leap 15.1"
    },
    {
    "id": 1431,
    "uid": "329176e6-6fd0-4216-bc4f-02a5bf74cdeb",
    "platform": "Windows",
    "type": "server",
    "os": "CentOS 7",
    "stack": "Windows, Windows 7"
    },
    {
    "id": 6986,
    "uid": "41858c33-ed54-4837-ac4a-9970873ce835",
    "platform": "Linux",
    "type": "server",
    "os": "Ubuntu Desktop 18.04",
    "stack": "Linux, Ubuntu Desktop 19.10"
    },
    {
    "id": 8601,
    "uid": "b6babe9e-0004-4210-99a1-10358185f1ab",
    "platform": "macOS",
    "type": "workstation",
    "os": "Windows 10",
    "stack": "Windows, Windows 8.1"
    },
    {
    "id": 3154,
    "uid": "630541b1-236a-473c-98c5-e72763ab2fc1",
    "platform": "macOS",
    "type": "server",
    "os": "Mojave (10.14)",
    "stack": "macOS, High Sierra (10.13)"
    },
    {
    "id": 856,
    "uid": "e184db3d-4cb4-42d1-a05d-3104eaf60bf9",
    "platform": "Linux",
    "type": "workstation",
    "os": "Windows Server 2019",
    "stack": "Linux, CentOS 8"
    },
    {
    "id": 8388,
    "uid": "ede47e10-07a3-419d-897c-e2d4bdbfc1b4",
    "platform": "macOS",
    "type": "workstation",
    "os": "Debian 10.10.3",
    "stack": "Windows, Windows 10"
    },
    {
    "id": 7358,
    "uid": "2a945a6f-4421-411a-af79-00817a26a965",
    "platform": "Windows",
    "type": "server",
    "os": "RHEL 6.10",
    "stack": "macOS, Catalina (10.15)"
    },
    {
    "id": 5734,
    "uid": "5efc04b8-318c-437a-ac7b-bb1c42ed0729",
    "platform": "macOS",
    "type": "workstation",
    "os": "Ubuntu Server 19.10",
    "stack": "Linux, Debian 9.9.10"
    }
    ]
`)

module.exports = data;