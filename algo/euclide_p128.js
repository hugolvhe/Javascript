function euclide(a,b) {
    if(a>0 && b >0 && a>b) {
        return "erreur";
    }
    r = a/b;
    if(r==0) {
        return b;
    }
    else {
        return euclide(b,r);
    }
}