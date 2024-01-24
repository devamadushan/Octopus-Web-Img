//Autor : Deva



function adjustStyles() {
    const ecolabs = document.querySelector('.ecolabs');
    const ecolabs_mobil = document.querySelector('.ecolabs_mobil')
    const E1C3 = document.querySelector('#E1C3');
    const E1C3_mobil = document.querySelector('.E1C3_mobil')
    const E1C2 = document.querySelector('.E1C2');

    const btnE1C3 = document.querySelector('.btnE1C3');
    const btnE1C2 =document.querySelector('.btnE1C2');
    const btnE1C1 = document.querySelector('.btnE1C1')

    const E3C3 = document.querySelector('.E3C3')
    const E5C3 = document.querySelector('.E5C3')
    const E2C1 = document.querySelector('.E2C1')
    const E4C1 = document.querySelector('.E2C1')



    const btnE3C3 = document.querySelector('.btnE3C3')
    const btnE3C2 = document.querySelector('.btnE3C2')
    const btnE3C1 = document.querySelector('.btnE3C1')

    const btnE5C3 = document.querySelector('.btnE5C3')
    const btnE5C2 = document.querySelector('.btnE5C2')
    const btnE5C1 = document.querySelector('.btnE5C1')

    const btnE2C3 = document.querySelector('.btnE2C3')
    const btnE2C2 = document.querySelector('.btnE2C2')
    const btnE2C1 = document.querySelector('.btnE2C1')

    const btnE4C3 = document.querySelector('.btnE4C3')
    const btnE4C2 = document.querySelector('.btnE4C2')
    const btnE4C1 = document.querySelector('.btnE4C1')

    const btnE6C3 = document.querySelector('.btnE6C3')
    const btnE6C2 = document.querySelector('.btnE6C2')
    const btnE6C1 = document.querySelector('.btnE6C1')




    const btnE1C3_mobil = document.querySelector('.btnE1C3_mobil');
    const btnE1C2_mobil =document.querySelector('.btnE1C2_mobil');
    const btnE1C1_mobil = document.querySelector('.btnE1C1_mobil')

   
    const btnE2C1_mobil = document.querySelector('.btnE2C1_mobil')
    const btnE2C2_mobil = document.querySelector('.btnE2C2_mobil') 
    const btnE2C3_mobil = document.querySelector('.btnE2C3_mobil')

    const btnE3C3_mobil = document.querySelector('.btnE3C3_mobil')
    const btnE3C2_mobil = document.querySelector('.btnE3C2_mobil') 
    const btnE3C1_mobil = document.querySelector('.btnE3C1_mobil')

    const btnE4C1_mobil = document.querySelector('.btnE4C1_mobil')
    const btnE4C2_mobil = document.querySelector('.btnE4C2_mobil') 
    const btnE4C3_mobil = document.querySelector('.btnE4C3_mobil')

    const btnE5C3_mobil = document.querySelector('.btnE5C3_mobil')
    const btnE5C2_mobil = document.querySelector('.btnE5C2_mobil') 
    const btnE5C1_mobil = document.querySelector('.btnE5C1_mobil')

    const btnE6C1_mobil = document.querySelector('.btnE6C1_mobil')
    const btnE6C2_mobil = document.querySelector('.btnE6C2_mobil') 
    const btnE6C3_mobil = document.querySelector('.btnE6C3_mobil')

    const E2C1_mobil = document.querySelector('.E2C1_mobil')
    const E3C3_mobil = document.querySelector('.E3C3_mobil')
    const E4C1_mobil = document.querySelector('.E4C1_mobil')
    const E5C3_mobil = document.querySelector('.E5C3_mobil')
    const E6C1_mobil = document.querySelector('.E6C1_mobil')
   
   

   

    if (window.innerWidth <= 2129) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '270px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;
        btnE1C2.style.marginTop = '2%'

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '20%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '0%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

    }
if (window.innerWidth <= 2035) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '258px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;
        btnE1C2.style.marginTop = '2%'

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '20%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '0%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

    }

    if (window.innerWidth <= 2000) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '248px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;
        btnE1C2.style.marginTop = '2%'

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '20%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '0%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

    }if (window.innerWidth <= 1980) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '248px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;
        btnE1C2.style.marginTop = '2%'

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;


        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '0%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

    } 
    if (window.innerWidth <= 1950) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '245px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-8%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    } 
    if (window.innerWidth <= 1929) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '240px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop = ''

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop ='2%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-12%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    } 
    if (window.innerWidth <= 1899) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '240px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop= '-5%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-5%`;
        btnE3C3.style.marginTop= '-5%'

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;
        //btnE3C1.style.marginTop = '-5%'

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop= '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-2%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop= '-10%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    } 
    if (window.innerWidth <= 1873) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '245px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-8%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }
    if (window.innerWidth <= 1844) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '245px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-15%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        //btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-8%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;


        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }
   
    if (window.innerWidth <= 1788) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '245px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-30%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-8%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-5%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }if (window.innerWidth <= 1771) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '245px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-33%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }
    if (window.innerWidth <= 1748) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '240px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-40%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }if (window.innerWidth <= 1727) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '239px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-42%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;


        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;

        

    }if (window.innerWidth <= 1709) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '237px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-22%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1672) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '230px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-22%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1643) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '230px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 30
        const paddingbottom = 30
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-30%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-22%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1628) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '223px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 28
        const paddingbottom = 28
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-1%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1589) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '215px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 28
        const paddingbottom = 28
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-1%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1562) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '215px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 28
        const paddingbottom = 28
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-15%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-10%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1562) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '207px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-10%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '6%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='7%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1538) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '207px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-10%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '6%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-7%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1504) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '207px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-10%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-7%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1477) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '199px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-10%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-7%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1453) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '199px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-19%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-9%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-11%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1433) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '199px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-29%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-7%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-15%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1420) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '199px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 26
        const paddingbottom = 26
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-945%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-19%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-15%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1404) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '190px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 25
        const paddingbottom = 25
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-25%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-1%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }


    if (window.innerWidth <= 1385) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '190px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 25
        const paddingbottom = 25
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-25%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-12%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-5%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1367) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '190px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 25
        const paddingbottom = 25
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 1350) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '180px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 25
        const paddingbottom = 25
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1334) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '180px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 25
        const paddingbottom = 25
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-16%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-6%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1322) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '180px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 24
        const paddingbottom = 24
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-16%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1298) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '174px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 24
        const paddingbottom = 24
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-16%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE3C2.style.marginTop = '-6%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1284) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '174px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 24
        const paddingbottom = 24
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-30%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        btnE2C1.style.marginTop ='-18%'

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 1273) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '174px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 22
        const paddingbottom = 22
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1251) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '174px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 22
        const paddingbottom = 22
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1235) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '165px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 22
        const paddingbottom = 22
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1235) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '165px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 22
        const paddingbottom = 22
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-9%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1216) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '165px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 22
        const paddingbottom = 22
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-32%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-25%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-10%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1200) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '165px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 20
        const paddingbottom = 20
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-2%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-10%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1177) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '155px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 20
        const paddingbottom = 20
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-2%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-10%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 1150) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '155px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 20
        const paddingbottom = 20
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-10%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1138) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '155px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 20
        const paddingbottom = 20
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-20%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1125) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '155px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 18
        const paddingbottom = 18
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-20%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-90%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-1%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1094) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '142px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 18
        const paddingbottom = 18
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-1%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 1079) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '142px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 18
        const paddingbottom = 18
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-10%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-12%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 1079) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '142px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 18
        const paddingbottom = 18
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-15%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-12%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1079) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '142px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 18
        const paddingbottom = 18
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-15%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-12%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1066) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '142px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 16
        const paddingbottom = 16
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-1%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-1%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 1037) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '135px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 16
        const paddingbottom = 16
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-25%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 1004) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '135px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 14
        const paddingbottom = 14
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 980) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '125px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 14
        const paddingbottom = 14
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 958) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '125px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 12
        const paddingbottom = 12
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-12%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 938) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '125px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 10
        const paddingbottom = 10
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 914) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 10
        const paddingbottom = 10
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 895) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 10
        const paddingbottom = 10
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-15%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 882) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 8
        const paddingbottom = 8
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '9%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-1%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 861) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 8
        const paddingbottom = 8
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-1%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 849) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 8
        const paddingbottom = 8
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-9%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }
    if (window.innerWidth <= 844) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '115px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 6
        const paddingbottom = 6
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '9%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    } if (window.innerWidth <= 823) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '105px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 6
        const paddingbottom = 6
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '9%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 807) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '105px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 6
        const paddingbottom = 6
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '-9%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }

    if (window.innerWidth <= 797) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '105px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 4
        const paddingbottom = 4
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 782) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '100px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 4
        const paddingbottom = 4
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '1%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth <= 772) {
        
        ecolabs.style.display = 'block';
        E1C3.style.position = 'absolute';
        E1C3.style.top = '100px';
        E1C3.style.left = '25.1%';
       //
        E1C3.style.width = '4%';
        
        const paddingtop = 4
        const paddingbottom = 4
        const width = 150
        btnE1C3.style.width = `${width}%`;
        btnE1C3.style.paddingTop = `${paddingtop}%`;
        btnE1C3.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3.style.marginTop ='-50%'

        btnE1C2.style.paddingTop = `${paddingtop}%`;
        btnE1C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2.style.width =`${width}%`;

        btnE1C1.style.paddingTop = `${paddingtop}%`;
        btnE1C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE3C3.style.paddingTop = `${paddingtop}%`;
        btnE3C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C3.style.width =`${width}%`;
        btnE3C3.style.marginTop =`-4444%`;

        btnE3C2.style.paddingTop = `${paddingtop}%`;
        btnE3C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C2.style.width =`${width}%`;
       // btnE3C2.style.marginTop =`-5%`;
       
        btnE3C1.style.paddingTop = `${paddingtop}%`;
        btnE3C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE3C1.style.width =`${width}%`;

        btnE5C3.style.paddingTop = `${paddingtop}%`;
        btnE5C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C3.style.width =`${width}%`;
        btnE5C3.style.marginTop = '-12%'

        btnE5C2.style.paddingTop = `${paddingtop}%`;
        btnE5C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '10%'

        btnE5C1.style.paddingTop = `${paddingtop}%`;
        btnE5C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE5C1.style.width =`${width}%`;
        

        btnE2C2.style.paddingTop = `${paddingtop}%`;
        btnE2C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2.style.width =`${width}%`;
        btnE5C2.style.marginTop = '-10%'

        btnE2C1.style.paddingTop = `${paddingtop}%`;
        btnE2C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1.style.width =`${width}%`;
        btnE2C1.style.marginTop = '5%'
        

        btnE2C3.style.paddingTop = `${paddingtop}%`;
        btnE2C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3.style.width =`${width}%`;
        btnE2C3.style.marginTop = '-9%'

        btnE4C1.style.paddingTop = `${paddingtop}%`;
        btnE4C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C1.style.width =`${width}%`;
        btnE4C1.style.marginTop = '-1%'

        btnE4C2.style.paddingTop = `${paddingtop}%`;
        btnE4C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C2.style.width =`${width}%`;

        btnE4C3.style.paddingTop = `${paddingtop}%`;
        btnE4C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE4C3.style.width =`${width}%`;
        btnE4C3.style.marginTop = '-6%'

        btnE6C1.style.paddingTop = `${paddingtop}%`;
        btnE6C1.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1.style.width =`${width}%`;

        btnE6C2.style.paddingTop = `${paddingtop}%`;
        btnE6C2.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2.style.width =`${width}%`;

        btnE6C3.style.paddingTop = `${paddingtop}%`;
        btnE6C3.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3.style.width =`${width}%`;
    }if (window.innerWidth > 767) {
        ecolabs_mobil.style.display = 'None';
        E1C3.style.display = 'block';
        E1C3_mobil.style.display = 'None'

    }

    if (window.innerWidth <= 767) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '366px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop ='-5%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop ='2%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    }     if (window.innerWidth <= 760) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '366px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-20%`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-20%`;

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-30%`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    }  if (window.innerWidth <= 754) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '356px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-20%`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-30%`;

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
        btnE4C1_mobil.style.marginTop =`-10%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-40%`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 750) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '356px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-20%`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-50%`;

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
        btnE4C1_mobil.style.marginTop =`-20%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-50%`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 746) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '356px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-35%`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-60%`;

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
        btnE4C1_mobil.style.marginTop =`-30%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-60%`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 741) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '356px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 350

        const paddingtop3 = 60
        const paddingbottom3 = 60
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-25px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-90%`;

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C1_mobil.style.width =`${width2}%`;
        btnE4C1_mobil.style.marginTop =`-40%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C2_mobil.style.width =`${width2}%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE4C3_mobil.style.width =`${width2}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-9990px`;
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
       
        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 738) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '356px';

        
        E1C3_mobil.style.left = '22.5%';
        
        E1C3.style.width = '4%';
        

        const paddingtop = 80
        const paddingbottom = 80
        const width = 350

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 330

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 300

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='-5%'
        

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        //btnE1C1.style.marginTop =`14%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-25px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;


        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`00%`;
        E3C3_mobil.style.marginTop = '1500%'
        E3C3_mobil.style.marginLeft = '16%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        btnE4C1_mobil.style.marginTop =`-40%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`0%`;
        E5C3_mobil.style.marginTop = '1570%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 730) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '346px';

        
        E1C3_mobil.style.left = '23.5%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-5px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`30%`;
        //E3C3_mobil.style.marginTop = '1500%'
        //E3C3_mobil.style.marginLeft = '16%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        btnE4C1_mobil.style.marginTop =`-40%`;
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-30%`;
        //E5C3_mobil.style.marginTop = '1570%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 722) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '346px';

        
        E1C3_mobil.style.left = '23.5%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-15px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`10%`;
        //E3C3_mobil.style.marginTop = '1500%'
        //E3C3_mobil.style.marginLeft = '16%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '730%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`-30%`;
        //E5C3_mobil.style.marginTop = '1570%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
        
    } if (window.innerWidth <= 715) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '346px';

        
        E1C3_mobil.style.left = '23.5%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-15px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;

        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-20%`;
        //E3C3_mobil.style.marginTop = '1500%'
        //E3C3_mobil.style.marginLeft = '16%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '730%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1530%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 709) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '340px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-25px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        btnE3C3_mobil.style.marginTop =`-29%`;
        //E3C3_mobil.style.marginTop = '1500%'
        E3C3_mobil.style.marginLeft = '26%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '715%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1515%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 701) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '340px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-33px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1480%'
        E3C3_mobil.style.marginLeft = '26%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '705%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1500%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 695) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '340px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        btnE2C1_mobil.style.marginTop =`-33px`;

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1449%'
        E3C3_mobil.style.marginLeft = '26%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '695%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1480%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 690) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '340px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 60
        const paddingbottom = 60
        const width = 300

        const paddingtop2 = 60
        const paddingbottom2 = 60
        const width2 = 300

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='40%'

        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '690%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`22px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1449%'
        E3C3_mobil.style.marginLeft = '26%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '695%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1470%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 685) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'


        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '740%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1479%'
        E3C3_mobil.style.marginLeft = '26%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '720%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1450%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }
    if (window.innerWidth <= 680) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'


        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '740%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1449%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
       
        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '720%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1440%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 675) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '720%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1449%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '700%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1430%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 670) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '710%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1429%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '690%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1420%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '35%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 665) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '690%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1429%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '680%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1400%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '10%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 658) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       
        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '670%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1409%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '660%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1400%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '10%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }
    if (window.innerWidth <= 652) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '325px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1389%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '675%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1370%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 646) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '320px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1379%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '655%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-40%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-40%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1350%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 641) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '320px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1349%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '645%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-40%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-40%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1340%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 635) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '320px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 290

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 290

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width2}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1309%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width2}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width2}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '645%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-40%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-40%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1320%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 630) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '300px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1309%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '645%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-40%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-40%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1320%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 622) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '300px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '650%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-40%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-40%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1289%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '615%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-40%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-40%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1290%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 617) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '300px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '620%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-50%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-50%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1289%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '615%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-50%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-50%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1270%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 610) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '300px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '620%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-50%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-50%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1249%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '605%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-50%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-50%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1260%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 605) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '300px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-60%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-60%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-50%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-50%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1249%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-40%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-40%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '605%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-50%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-50%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1240%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-40%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-40%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 600) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '290px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-75%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-75%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-70%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-70%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1249%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-50%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-50%'


        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '585%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginTop =`40%`;
        btnE4C2_mobil.style.marginLeft =`-80%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-80%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
        E5C3_mobil.style.marginTop = '1230%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-50%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-50%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 595) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '290px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-75%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`34%`;
        btnE1C1_mobil.style.marginLeft ='-75%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-70%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-70%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1229%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '595%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        
        btnE4C2_mobil.style.marginLeft =`-140%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1230%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 590) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '290px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 40
        const paddingbottom3 = 40
        const width3 = 250

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1229%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '595%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        
        btnE4C2_mobil.style.marginLeft =`-140%`;

       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1210%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '35%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 585) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '290px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1229%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '565%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1250%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 578) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '280px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1189%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '565%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1250%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 573) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '280px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 50
        const paddingbottom = 50
        const width = 280

        const paddingtop2 = 50
        const paddingbottom2 = 50
        const width2 = 280

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='60%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '590%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`32px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1159%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`23%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '565%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1230%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 568) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '280px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '600%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1199%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '595%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1230%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
       

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        
    }if (window.innerWidth <= 565) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '280px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '600%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1199%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '595%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1185%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 560) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '280px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '580%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1179%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '595%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1175%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 555) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '270px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '580%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1179%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '565%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1175%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 550) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '270px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 30
        const paddingbottom3 = 30
        const width3 = 230

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-100%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-100%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '580%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-90%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-90%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1139%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '565%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-140%`;
        btnE4C2_mobil.style.marginTop =`55%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-140%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1175%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '60%'
        btnE5C2_mobil.style.marginLeft =`-70%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-70%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }
    if (window.innerWidth <= 545) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '270px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 250

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 250

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '560%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1139%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '555%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1175%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 537) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '270px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '540%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1119%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '545%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1155%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 530) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '260px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '540%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width}%`;
        btnE2C3_mobil.style.marginTop =`12px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1109%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '525%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1135%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 525) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '260px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '540%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1099%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '525%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1115%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 518) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '260px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '510%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1099%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '525%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1115%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 513) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '250px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '510%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1099%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '515%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1090%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 508) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '250px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 40
        const paddingbottom = 40
        const width = 240

        const paddingtop2 = 40
        const paddingbottom2 = 40
        const width2 = 240

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 210

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='80%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '510%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`39px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1069%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`43%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '505%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1080%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 503) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 190

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '540%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1099%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '520%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1080%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 499) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 190

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '540%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1069%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '520%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1060%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 494) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 190

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '520%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1069%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '510%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1040%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '290%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-65%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-65%`;
        
    }if (window.innerWidth <= 489) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 190

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '510%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1050%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '510%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1020%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-5%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '599%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 485) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 190

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '510%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1030%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '510%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1010%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-20%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }   
    if (window.innerWidth <= 480) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '240px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='95%'
        btnE1C2_mobil.style.marginLeft ='-130%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-130%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '480%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1030%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-120%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-120%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '490%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-160%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-160%`;
        btnE4C3_mobil.style.marginTop =`-15%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1000%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-100%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-20%'
        btnE5C1_mobil.style.marginLeft =`-100%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 474) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '490%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1025%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '480%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1000%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-20%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 470) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '490%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '1005%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '460%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '1000%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-20%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 465) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '490%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '980%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '460%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '979%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-20%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 460) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '460%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '980%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '460%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '959%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 455) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '460%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-110%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-110%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '950%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '460%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '939%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 450) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '225px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '435%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '955%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-42%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '440%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '939%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '260%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-95%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-95%`;
        
    }if (window.innerWidth <= 445) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '215px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '435%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '950%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '430%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '920%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 440) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '215px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 30
        const paddingbottom = 30
        const width = 210

        const paddingtop2 = 30
        const paddingbottom2 = 30
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='100%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '435%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`50px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '910%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`63%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '430%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '910%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-130%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-130%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 435) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '205px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 20
        const paddingbottom3 = 20
        const width3 = 170

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '455%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '940%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '440%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`75%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '890%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '80%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 430) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '205px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '455%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '940%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '420%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '890%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 425) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '205px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '455%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '900%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '420%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '880%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 420) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '205px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '425%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '900%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '420%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '860%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 415) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '205px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '425%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '880%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '410%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '840%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 410) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '190px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 180

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-160%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-160%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '425%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-150%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-150%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '880%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-180%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-180%'
        btnE3C1_mobil.style.marginTop ='-52%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '410%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-200%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-200%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '840%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-150%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-150%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 405) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '190px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '425%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '860%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '390%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '820%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 400) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '190px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '400%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '860%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-32%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '380%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-95%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '810%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-55%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 395) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '190px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '400%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '830%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '400%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-100%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '810%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 390) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '190px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '820%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '400%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-100%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '800%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '589%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 385) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '180px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '820%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '380%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-100%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '790%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '549%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 385) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '180px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '820%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '380%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-100%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '790%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '549%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 380) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '180px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 15
        const paddingbottom3 = 15
        const width3 = 150

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='120%'
        btnE1C2_mobil.style.marginLeft ='-190%'



        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '790%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;
        //btnE4C1_mobil.style.marginTop =`-167%`;
        E4C1_mobil.style.marginTop = '380%'
       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-100%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '770%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '85%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 375) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '180px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 20
        const paddingbottom = 20
        const width = 160

        const paddingtop2 = 20
        const paddingbottom2 = 20
        const width2 = 210

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='110%'
        btnE1C2_mobil.style.marginLeft ='-190%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-190%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`60px`;
        btnE2C2_mobil.style.marginLeft ='-180%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-180%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '790%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`83%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '380%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`90%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '780%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 370) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '170px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-210%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-210%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`70px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '780%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '380%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '740%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }
    if (window.innerWidth <= 365) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '170px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-210%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-210%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        //btnE2C1_mobil.style.marginTop =`-43px`;
        E2C1_mobil.style.marginTop = '380%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`70px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-1px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        //btnE3C3_mobil.style.marginTop =`-33%`;
        E3C3_mobil.style.marginTop = '760%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-29%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '360%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        //btnE5C3_mobil.style.marginTop =`-60%`;
       
        E5C3_mobil.style.marginTop = '740%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-90%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-66%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 360) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '170px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-210%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-210%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        btnE2C1_mobil.style.marginTop =`4px`;
        E2C1_mobil.style.marginTop = '340%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`70px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-9px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        btnE3C3_mobil.style.marginTop =`33%`;
        E3C3_mobil.style.marginTop = '710%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-69%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '360%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`10%`;
       
        E5C3_mobil.style.marginTop = '710%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-1000%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-96%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 355) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '170px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-210%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-210%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        btnE2C1_mobil.style.marginTop =`4px`;
        E2C1_mobil.style.marginTop = '340%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`70px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-9px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        btnE3C3_mobil.style.marginTop =`33%`;
        E3C3_mobil.style.marginTop = '690%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-69%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '330%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`10%`;
       
        E5C3_mobil.style.marginTop = '690%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-1000%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-96%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 350) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '170px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-210%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-210%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        btnE2C1_mobil.style.marginTop =`4px`;
        E2C1_mobil.style.marginTop = '320%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`65px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-9px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        btnE3C3_mobil.style.marginTop =`33%`;
        E3C3_mobil.style.marginTop = '690%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-69%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '330%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`10%`;
       
        E5C3_mobil.style.marginTop = '690%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-1000%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-96%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }if (window.innerWidth <= 340) {
        
        ecolabs.style.display = 'None';
        ecolabs_mobil.style.display = 'block'
        E1C3.style.display = 'None';
        E1C3_mobil.style.display = 'block'
        E1C3_mobil.style.position = 'absolute';
        

        E1C3_mobil.style.top = '160px';

        
        E1C3_mobil.style.left = '22.0%';
        E1C3.style.width = '4%';
        

        const paddingtop = 15
        const paddingbottom = 15
        const width = 160

        const paddingtop2 = 15
        const paddingbottom2 = 15
        const width2 = 200

        const paddingtop3 = 5
        const paddingbottom3 = 5
        const width3 = 110

        btnE1C3_mobil.style.width = `${width}%`;
        btnE1C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C3_mobil.style.paddingBottom = `${paddingbottom}%`;
        btnE1C3_mobil.style.marginTop ='-50%'

        btnE1C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C2_mobil.style.width =`${width}%`;
        btnE1C2_mobil.style.marginTop ='130%'
        btnE1C2_mobil.style.marginLeft ='-230%'
        btnE1C2_mobil.style.marginBottom ='-19%'




        btnE1C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE1C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE1C1_mobil.style.width =`${width}%`;
        btnE1C1_mobil.style.marginTop =`04%`;
        btnE1C1_mobil.style.marginLeft ='-230%'
       


        btnE2C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C1_mobil.style.width =`${width3}%`;
        btnE2C1_mobil.style.marginTop =`4px`;
        E2C1_mobil.style.marginTop = '320%'

        btnE2C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C2_mobil.style.width =`${width3}%`;
        btnE2C2_mobil.style.marginTop =`65px`;
        btnE2C2_mobil.style.marginLeft ='-200%'

        btnE2C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE2C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE2C3_mobil.style.width =`${width3}%`;
        btnE2C3_mobil.style.marginTop =`-9px`;
        btnE2C3_mobil.style.marginLeft ='-200%'
        //btnE2C3_mobil.style.marginLeft =`12px`;


        btnE3C3_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C3_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C3_mobil.style.width =`${width3}%`;
        btnE3C3_mobil.style.marginTop =`33%`;
        E3C3_mobil.style.marginTop = '650%'
        E3C3_mobil.style.marginLeft = '39%'

        btnE3C2_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C2_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C2_mobil.style.width =`${width3}%`;
        btnE3C2_mobil.style.marginTop =`95%`;
        btnE3C2_mobil.style.marginLeft ='-220%'
        btnE3C2_mobil.style.marginBottom ='-90%'

        btnE3C1_mobil.style.paddingTop = `${paddingtop2}%`;
        btnE3C1_mobil.style.paddingBottom =  `${paddingbottom2}%`;
        btnE3C1_mobil.style.width =`${width3}%`;
        btnE3C1_mobil.style.marginLeft ='-220%'
        btnE3C1_mobil.style.marginTop ='-69%'

        btnE4C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C1_mobil.style.width =`${width3}%`;

        //btnE4C1_mobil.style.marginBottom =`-167%`;
        E4C1_mobil.style.marginTop = '330%'

       
        btnE4C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C2_mobil.style.width =`${width3}%`;
        btnE4C2_mobil.style.marginLeft =`-230%`;
        btnE4C2_mobil.style.marginTop =`110%`;
        btnE4C2_mobil.style.marginBottom ='-90%'
       
        btnE4C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE4C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE4C3_mobil.style.width =`${width3}%`;
        btnE4C3_mobil.style.marginLeft =`-230%`;
        btnE4C3_mobil.style.marginTop =`-150%`;

        btnE5C3_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C3_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C3_mobil.style.width =`${width3}%`;
        btnE5C3_mobil.style.marginTop =`10%`;
       
        E5C3_mobil.style.marginTop = '650%'
       
        btnE5C2_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C2_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C2_mobil.style.width =`${width3}%`;
        btnE5C2_mobil.style.marginTop = '110%'
        btnE5C2_mobil.style.marginLeft =`-170%`;
        btnE5C2_mobil.style.marginBottom ='-1000%'
       
        btnE5C1_mobil.style.paddingTop = `${paddingtop3}%`;
        btnE5C1_mobil.style.paddingBottom =  `${paddingbottom3}%`;
        btnE5C1_mobil.style.width =`${width3}%`;
        btnE5C1_mobil.style.marginTop = '-96%'
        btnE5C1_mobil.style.marginLeft =`-170%`;

        btnE6C1_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C1_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C1_mobil.style.width =`${width}%`;
        E6C1_mobil.style.marginTop = '490%'  
        E6C1_mobil.style.marginLeft = '230%'              

        btnE6C2_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C2_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C2_mobil.style.width =`${width}%`;
        btnE6C2_mobil.style.marginLeft =`-125%`;


        btnE6C3_mobil.style.paddingTop = `${paddingtop}%`;
        btnE6C3_mobil.style.paddingBottom =  `${paddingbottom}%`;
        btnE6C3_mobil.style.width =`${width}%`;
        btnE6C3_mobil.style.marginLeft =`-125%`;
        
    }





















}
// Appeler la fonction pour ajuster les styles initiaux
adjustStyles();

// Ajouter un écouteur d'événement de redimensionnement de fenêtre
window.addEventListener('resize', adjustStyles);