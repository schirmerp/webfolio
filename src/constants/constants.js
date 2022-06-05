export const projects = [
    {
      title: 'Class Web Page',
      description: "This was a web site I built to explore AWS. I used AWS Cognito, AWS Amplify, AWS DynamoDB and AWS IAM for user authentication. I orginally created it thinking it would be a good project for the whole class to work on in our spare time. As it ended up we had no spare time, thus I recieved little interest from anyone about helping! Therefore it never attained its intended glory! You will have to create an account since one of its purposes is User Authentication!",
        image: 'https://raw.githubusercontent.com/schirmerp/webfolio/main/public/images/1.png',
        tags: ['AWS', 'JavaScript', 'React', 'CSS'],
      source: 'https://schirmerp.github.io/class-react/',
      visit: 'https://github.com/schirmerp/class-react',
      id: 0,
    },
    {
      title: 'Etch A Sketch App',
      description:"One of the first web apps I wrote. A good old fashion Etch a Sketch style app that allows you to choose different size boards and erase blocks",
      image: 'https://raw.githubusercontent.com/schirmerp/webfolio/main/public/images/6.png',
      tags: [ 'JavaScript', 'HTML', 'CSS'],
      source: 'https://google.com',
      visit: 'https://google.com',
      id: 1,
    },
    {
      title: 'Memory Game',
      description: "A memory style game. Players must choose a different card each time without choosing a card they have already selected. Cards positions randomly change afer each selection ",
        image: 'https://raw.githubusercontent.com/schirmerp/webfolio/main/public/images/2.png',
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      source: 'https://schirmerp.github.io/memory-game/',
      visit: 'https://github.com/schirmerp/memory-game',
      id: 2,
    },
    {
      title: 'Shop',
      description: "Anotehr oldy but goody. This was a store application I built using React. It implements React Router as well as shopping cart to keep track of your total. These pages were not built to be beautiful, but rather left in there original state for the posterity of my Web Dev Learning Journey! ",
      image: 'https://raw.githubusercontent.com/schirmerp/webfolio/main/public/images/4.png',
      tags: ['React', 'React Router', 'HTML', 'CSS'],
      source: 'https://schirmerp.github.io/shop/#/shop',
      visit: 'https://github.com/schirmerp/shop',
      id: 3,
    },
    {
        title: 'Weather App',
        description: "This was a Weather App I built. Another one of my early projects. This simple page was built to practice and work with APIs",
          image: 'https://raw.githubusercontent.com/schirmerp/webfolio/main/public/images/5.png',
          tags: ['JavaScript', 'HTML', 'CSS', 'API'],
        source: 'https://schirmerp.github.io/weather/',
        visit: 'https://github.com/schirmerp/weather',
        id: 2,
      },
  ];
 
  
  export const TimeLineData = [   
    { year: 2019, text: 'Completed Harvards Universities CS50 course on EdX', meth: <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" id="meth" target='_blank'>CS50 Harvard</a>, },
    { year: 2020, text: 'Began The Odin Project', tag:'https://www.theodinproject.com', meth: <a id="meth" href="https://www.theodinproject.com/" target="_blank">the odin project</a>,  },
    { year: 2021, text: 'Finally completed The Odin Project', meth: <a id="meth" href="https://www.theodinproject.com/"  target="_blank">the odin project</a>, },
    { year: 2022, text: 'Accepted into Per Scholas and completed AWS ReStart Program', text2: 'AWS Cloud Practitioner Certification', meth: <a id="meth" href="https://perscholas.org/" target="_blank">Per Scholas</a>,  },
  ];