import localFont from "next/font/local";


const svnMotherCarmel = localFont({
    src: "./fonts/SvnMotherCarmel.otf",
    variable: "--font-svn-mother-carmel",
});

const svnPleasent = localFont({
    src: "./fonts/SVN-PLEASENT.otf",
    variable: "--font-svn-pleasent",
});

const svnPRIMARK = localFont({
    src: "./fonts/SVN-PRIMARK.otf",
    variable: "--font-svn-primark",
});

const mtdQuangNinh = localFont({
    src: "./fonts/MTD_QUANGNINH_THUPHAP.ttf",
    variable: "--font-mtd-quang-ninh",
});


export {
    svnMotherCarmel,
    svnPleasent,
    svnPRIMARK,
    mtdQuangNinh,
}
