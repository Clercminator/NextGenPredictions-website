function blockScrolling() {
  // Disable scrolling by setting the overflow property of body to hidden
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents= 'none';

  // Re-enable scrolling after 5 seconds
  setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.pointerEvents= '';
  }, 2000);
}

// Call the function to block scrolling
blockScrolling();


document.querySelector('.logoC').addEventListener('animationend', function() {
  document.querySelector('.logoC').classList.remove('initial'); // Remove the initial class
  document.querySelector('.logoC').classList.add('animated'); // Mark it as having been animated
});


function scrollToTargetSection(e) {
  e.preventDefault(); // Prevent default anchor behavior

  // Extract the target section ID from the href attribute of the clicked button
  const targetId = this.getAttribute('href').substring(1); // Remove the '#' character to get the ID
  const targetSection = document.getElementById(targetId);

  if (targetSection) { // Check if the target element exists
    let scrollToOptions = {
      behavior: 'smooth' // Optional: Add smooth scrolling
    };

    if (targetId === 'contact') {
      // If the target is 'contact', scroll so the section is at the bottom of the viewport
      scrollToOptions.top = targetSection.offsetTop - window.innerHeight + targetSection.offsetHeight;
    } else {
      // For all other sections, scroll to the top of the section
      scrollToOptions.top = targetSection.offsetTop;
    }

    window.scrollTo(scrollToOptions);
  }

  // Optionally, remove this event listener after it has been triggered
  // Note: Removing the listener immediately after click might not be desired if you want the buttons to be reusable
}

// Add the event listener to all buttons with the class 'scrollButton'
document.querySelectorAll('.scrollButton').forEach(button => {
  button.addEventListener('click', scrollToTargetSection);
});
//---------------------BAR CHART 1----------------------
const CBar1 = document.getElementById('chartBar1');

//----------Data CBar1--------------
const data1CBar1=[];
let CB1prev1= 10;

for (let i = 0; i < 100; i++) {
CB1prev1 = Math.round(Math.random()*100);

data1CBar1.push({x: i, y: CB1prev1});
}

//----------Graph Initialization----------------
let observer1 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {

    const chartBar1 = new Chart(CBar1, {
      type: 'bar',
      data: {
        datasets: [{
          borderColor: 'rgb(126, 201, 255)',
          backgroundColor: 'rgb(126, 201, 255)',
          label: '# of Votes',
          data: data1CBar1,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            filler: {
              propagate: false,
            }, 
        }, 
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            type: 'linear',
            ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                },
                grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                }
          }, 
          y:{
            min: 0,
            max: 100,
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
        pointBackgroundColor: '#fff',
        radius: 10,
    }
    });
      
    // Optional: unobserve the element after animation
    observer.unobserve(entry.target);
  }
});
}, { threshold: 1 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer1.observe(CBar1);

//---------------------BAR CHART 2----------------------
const CBar2 = document.getElementById('chartBar2');

//----------Data CBar2--------------
const data1CBar2=[];
let CB2prev1= 10;

for (let i = 0; i < 100; i++) {
CB2prev1 = Math.round(Math.random()*100);

data1CBar2.push({x: i, y: CB2prev1});
}

//----------Graph Initialization----------------
let observer18 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {

    const chartBar2 = new Chart(CBar2, {
      type: 'bar',
      data: {
        datasets: [{
          borderColor: 'rgb(126, 201, 255)',
          backgroundColor: 'rgb(126, 201, 255)',
          label: '# of Votes',
          data: data1CBar2,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            filler: {
              propagate: false,
            }, 
        }, 
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            type: 'linear',
            ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                },
                grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                }
          }, 
          y:{
            min: 0,
            max: 100,
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
        pointBackgroundColor: '#fff',
        radius: 10,
    }
    });
      
    // Optional: unobserve the element after animation
    observer.unobserve(entry.target);
  }
});
}, { threshold: 1 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer18.observe(CBar2);

//---------------------BAR CHART 2----------------------
const CBar3 = document.getElementById('chartBar3');

//----------Data CBar2--------------
const data1CBar3=[];
let CB3prev1= 10;

for (let i = 0; i < 100; i++) {
CB3prev1 = Math.round(Math.random()*100);

data1CBar3.push({x: i, y: CB3prev1});
}

//----------Graph Initialization----------------
let observer19 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {

    const chartBar3 = new Chart(CBar3, {
      type: 'bar',
      data: {
        datasets: [{
          borderColor: 'rgb(126, 201, 255)',
          backgroundColor: 'rgb(126, 201, 255)',
          label: '# of Votes',
          data: data1CBar3,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            filler: {
              propagate: false,
            },
        }, 
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            type: 'linear',
            ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                },
                grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                }
          }, 
          y:{
            min: 0,
            max: 100,
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
        pointBackgroundColor: '#fff',
        radius: 10,
    }
    });
      
    // Optional: unobserve the element after animation
    observer.unobserve(entry.target);
  }
});
}, { threshold: 1 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer19.observe(CBar3);

//---------------------DOUGHNUT CHART----------------------
const CDoughnut1 = document.getElementById('chartDoughnut1');

//----------Data Doughnut1--------------
const data1CDoughnut1=[];
let CD1prev1= 10;

for (let i = 0; i < 4; i++) {
CD1prev1 = Math.round(Math.random() * 80)+10;
data1CDoughnut1.push(CD1prev1);
}
//----------Graph Initialization----------------
let observer17 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartDoughnut1 = new Chart(CDoughnut1, {
    type: 'doughnut',
    data: {
      labels: ['1', '2', '3', '4'],
      datasets: [{
        label: '# of Votes',
        data: data1CDoughnut1,
        borderWidth: 1,
        backgroundColor: [
          'rgb(126, 201, 255)',
          'rgb(255, 255, 255)',
          'rgb(45, 168, 255)',
          'rgb(0, 149, 255)'
        ],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              display: false // This will also remove the legend
          },
          tooltip: {
            enabled: false
          }
      }
    }
  });
          
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer17.observe(CDoughnut1);

const CDoughnut2 = document.getElementById('chartDoughnut2');
//----------Data CDoughnut2--------------
const data1CDoughnut2=[];
let CD2prev1= 10;

for (let i = 0; i < 4; i++) {
CD2prev1 = Math.round(Math.random() * 80)+10;
data1CDoughnut2.push(CD2prev1);
}
//----------Graph Initialization----------------
let observer16 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartDoughnut2 = new Chart(CDoughnut2, {
      type: 'doughnut',
      data: {
        labels: ['1', '2', '3', '4'],
        datasets: [{
          label: '# of Votes',
          data: data1CDoughnut2,
          borderWidth: 1,
          backgroundColor: [
            'rgb(45, 168, 255)',
            'rgb(0, 149, 255)',
            'rgb(126, 201, 255)',
            'rgb(255, 255, 255)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false // This will also remove the legend
            },
            tooltip: {
              enabled: false
            }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer16.observe(CDoughnut2);

//---------------------PIE CHART----------------------
const CPie1 = document.getElementById('chartPie1');

//----------Data CPie2--------------
const data1CPie1=[];
let CP1prev1= 10;

for (let i = 0; i < 3; i++) {
CP1prev1 = Math.round(Math.random() * 80)+10;
data1CPie1.push(CP1prev1);
}
//----------Graph Initialization----------------
let observer15 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartPie1= new Chart(CPie1, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: data1CPie1,
          backgroundColor: [
            'rgb(45, 168, 255)',
            'rgb(126, 201, 255)',
            'rgb(255, 255, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer15.observe(CPie1);

const CPie2 = document.getElementById('chartPie2');

//----------Data CPie2--------------
const data1CPie2=[];
let CP2prev1= 10;

for (let i = 0; i < 3; i++) {
CP2prev1 = Math.round(Math.random() * 80)+10;
data1CPie2.push(CP2prev1);
}

//----------Graph Initialization----------------
let observer14 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartPie2= new Chart(CPie2, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: data1CPie2,
          backgroundColor: [
            'rgb(255, 255, 255)',
            'rgb(126, 201, 255)',
            'rgb(45, 168, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer14.observe(CPie2);

const CPie3 = document.getElementById('chartPie3');

//----------Data CPie2--------------
const data1CPie3=[];
let CP3prev1= 10;

for (let i = 0; i < 3; i++) {
CP3prev1 = Math.round(Math.random() * 80)+10;
data1CPie3.push(CP3prev1);
}
//----------Graph Initialization----------------
let observer13 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartPie3= new Chart(CPie3, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: data1CPie3,
          backgroundColor: [
            'rgb(255, 255, 255)',
            'rgb(45, 168, 255)',
            'rgb(126, 201, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer13.observe(CPie3);


//---------------------LINE CHART----------------------
const CLine1 = document.getElementById('chartLine1');

//----------Data CProgLine1--------------
const data1CLine1=[];
let CL1prev1= 100;

for (let i = 0; i < 100; i++) {
CL1prev1 += 5 - Math.random() * 10;
data1CLine1.push({x: i, y: CL1prev1});
}
//----------Graph Initialization----------------
let observer12 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartLine1= new Chart(CLine1, {
      type: 'line',
      data: {
        datasets: [{
          data: data1CLine1,
          fill: false,
          borderColor: 'rgb(126, 201, 255)',
          tension: 0.1,
          radius: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }, 
        scales: {
          x: {
            type: 'linear',
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false,

        },
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer12.observe(CLine1);

//---------------------LINE CHART 2----------------------
const CLine2 = document.getElementById('chartLine2');

//----------Data ProgLine2--------------
const data1CLine2=[];
let CL2prev1= 100;

for (let i = 0; i < 100; i++) {
CL2prev1 += 5 - Math.random() * 10;
data1CLine2.push({x: i, y: CL2prev1});
}
//----------Graph Initialization----------------
let observer20 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartLine2= new Chart(CLine2, {
      type: 'line',
      data: {
        datasets: [{
          data: data1CLine2,
          fill: false,
          borderColor: 'rgb(126, 201, 255)',
          tension: 0.1,
          radius: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }, 
        scales: {
          x: {
            type: 'linear',
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false,

        },
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer20.observe(CLine2);

//---------------------BUBBLE CHART----------------------
const CBubble1 = document.getElementById('chartBubble1');

//----------Data CBubble1--------------
const data1CBubble1=[];
let CBub1prev1= 1;
let CBub1prev2= 1;
let CBub1prev3= 1;
for (let i = 0; i < 25; i++) {
CBub1prev1 = Math.random() * 100;
CBub1prev2 = Math.random() * 100;
CBub1prev3 = Math.random() * 10+5;
data1CBubble1.push({x: CBub1prev1, y: CBub1prev2, r: CBub1prev3});
}
//----------Graph Initialization----------------
let observer11 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartBubble1= new Chart(CBubble1, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Fallas',
          borderColor: 'rgb(255, 255, 255)',
          backgroundColor: 'rgb(126, 201, 255)',
          data: data1CBubble1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        },
        scales: {
          x: {
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }, 
          y:{
            ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer11.observe(CBubble1);

const CBubble2 = document.getElementById('chartBubble2');

//----------Data CBubble2--------------
const data1CBubble2=[];
let CBub2prev1= 1;
let CBub2prev2= 1;
let CBub2prev3= 1;
for (let i = 0; i < 25; i++) {
CBub2prev1 = Math.random() * 100;
CBub2prev2 = Math.random() * 100;
CBub2prev3 = Math.random() * 10+5;
data1CBubble2.push({x: CBub2prev1, y: CBub2prev2, r: CBub2prev3});
}
//----------Graph Initialization----------------
let observer10 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartBubble2= new Chart(CBubble2, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Fallas',
          borderColor: 'rgb(255, 255, 255)',
          backgroundColor: 'rgb(126, 201, 255)',
          data: data1CBubble2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        },
        scales: {
          x: {
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }, 
          y:{
            ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        },
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer10.observe(CBubble2);

//----------------------POLAR CHART-----------------------
const CPolar1 = document.getElementById('chartPolar1');

//----------Data CPolar1--------------
const data1CPolar2=[];
let CPol1prev1= 10;

for (let i = 0; i < 3; i++) {
CPol1prev1 = Math.round(Math.random() * 80)+20;
data1CPolar2.push(CPol1prev1);
}
//----------Graph Initialization----------------
let observer9 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartPolar1= new Chart(CPolar1, {
      type: 'polarArea',
      data: {
        datasets: [{
          data: data1CPolar2,
          backgroundColor: [
            'rgba(255, 255, 255, 0.5)',
            'rgba(45, 168, 255, 0.5)',
            'rgba(126, 201, 255, 0.5)',
            
          ],
          borderColor: 'transparent ',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        },
        scales: {
          r:{
            angleLines: {
              // Changing the color of the angle lines
              color: 'rgb(84, 143, 185)' // Blue color with some transparency
            },
            grid: {
              // Changing the color of the circular grid lines
              color: 'rgb(84, 143, 185)' // Green color with some transparency
            },
            ticks: {
              // Changing the color of the tick labels
              color: 'rgb(84, 143, 185)', // Red color with some transparency
              backdropColor: 'rgb(15, 45, 69)'
            }

          }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer9.observe(CPolar1);
//----------------------RADAR CHART-----------------------
const CRadar1 = document.getElementById('chartRadar1');

//----------Data CPolar1--------------
const data1CRadar1=[];
let CRad1prev1= 50;

for (let i = 0; i < 5; i++) {
CRad1prev1 = Math.round(Math.random() * 70)+30;
data1CRadar1.push(CRad1prev1);
}
//----------Graph Initialization----------------
let observer8 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartRadar1= new Chart(CRadar1, {
      type: 'radar',
      data: {
        labels: [
          'Production',
          'Cost',
          'Maintenance',
          'Operators',
          'Efficiency',
        ],
        datasets: [{
          label: 'My Second Dataset',
          data: data1CRadar1,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
        }]
      },
      options: {
        scales: {
          r:{
            angleLines: {
              // Changing the color of the angle lines
              color: 'rgb(84, 143, 185)' // Blue color with some transparency
            },
            grid: {
              // Changing the color of the circular grid lines
              color: 'rgb(84, 143, 185)' // Green color with some transparency
            },
            ticks: {
              // Changing the color of the tick labels
              color: 'rgb(84, 143, 185)', // Red color with some transparency
              backdropColor: 'rgb(15, 45, 69)'
            },
            pointLabels: {
              color: 'rgb(84, 143, 185)'
            }

          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        },

      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer8.observe(CRadar1);
//-----------------------SCATTER CHART-------------------------
const CScatter1 = document.getElementById('chartScatter1');

//----------Data Scatter1--------------
const data1CScatter1=[];
let CScat1prev1= 100;
let CScat1prev2= 80;
for (let i = 0; i < 1000; i++) {
CScat1prev1 += 5 - Math.random() * 10;
CScat1prev2 += 5 - Math.random() * 10;
data1CScatter1.push({x: CScat1prev1, y: CScat1prev2});
}
//----------Graph Initialization----------------
let observer7 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
      const chartScattter1= new Chart(CScatter1, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Scatter Dataset',
            data: data1CScatter1,
            backgroundColor: 'rgb(126, 201, 255)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false // This will also remove the legend
              }
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
              },
              grid: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
              }
            },
            y: {
              ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
              },
              grid: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
              }
            }
          }
        }
      });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer7.observe(CScatter1);

//-----------------------SCATTER CHART 2-------------------------
const CScatter2 = document.getElementById('chartScatter2');

//----------Data Scatter2--------------
const data1CScatter2=[];
let CScat2prev1= 100;
let CScat2prev2= 80;
for (let i = 0; i < 1000; i++) {
CScat1prev1 += 5 - Math.random() * 10;
CScat1prev2 += 5 - Math.random() * 10;
data1CScatter1.push({x: CScat2prev1, y: CScat2prev2});
}
//----------Graph Initialization----------------
let observer21 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
      const chartScattter1= new Chart(CScatter1, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Scatter Dataset',
            data: data1CScatter2,
            backgroundColor: 'rgb(126, 201, 255)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false // This will also remove the legend
              }
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
              },
              grid: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
              }
            },
            y: {
              ticks: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis labels
              },
              grid: {
                  color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
              }
            }
          }
        }
      });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer21.observe(CScatter2);

//--------------------------MIXED BAR LINE 1--------------------------------------
const CMBarLine1 = document.getElementById('chartMBarLine1');

//----------------Data CMBarLine1-----------------
const data1CMBarLine1=[];
const data2CMBarLine1=[];
let CMBarLine1prev1= 100;
for (let i = 0; i < 12; i++) {
CMBarLine1prev1 += 5 - Math.random() * 10;
data1CMBarLine1.push(CMBarLine1prev1);
data2CMBarLine1.push(CMBarLine1prev1);
}
//----------Graph Initialization----------------
let observer6 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartMBarLine1= new Chart(CMBarLine1, {
      data: {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: data2CMBarLine1 ,
            backgroundColor: 'rgb(126, 201, 255)',
            order: 1,
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: data2CMBarLine1,
            borderColor: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(255, 255, 255)',
            order: 0
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }, 
        scales: {
          x: {
            position: 'bottom',
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer6.observe(CMBarLine1);

//--------------------------MIXED BAR LINE 2--------------------------------------
const CMBarLine2 = document.getElementById('chartMBarLine2');

//----------------Data CMBarLine1-----------------
const data1CMBarLine2=[];
const data2CMBarLine2=[];
let CMBarLine2prev1= 100;
for (let i = 0; i < 12; i++) {
CMBarLine2prev1 += 5 - Math.random() * 10;
data1CMBarLine2.push(CMBarLine2prev1);
data2CMBarLine2.push(CMBarLine2prev1);
}
//----------Graph Initialization----------------
let observer22 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartMBarLine2= new Chart(CMBarLine2, {
      data: {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: data1CMBarLine2 ,
            backgroundColor: 'rgb(126, 201, 255)',
            order: 1,
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: data2CMBarLine2,
            borderColor: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(255, 255, 255)',
            order: 0
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }, 
        scales: {
          x: {
            position: 'bottom',
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer22.observe(CMBarLine2);
//----------------------------PROGESSIVE LINE CHART-----------------------------
const CProgLine1 = document.getElementById('chartProgLine1');

//----------Data CProgLine1--------------
function createTrendingArray(startValue, start, trend, volatility, points) {
  const dataArray = [];
  let prevValue = startValue;

  for (let i = start; i < points; i++) {
      // Apply the trend and add some volatility
      prevValue += trend + (Math.random() - 0.5) * volatility;
      dataArray.push({x: i, y: prevValue});
  }

  return dataArray;
}

// Usage:
const data1 = createTrendingArray(500, 0, -0.2, 20, 450); // Start at 100, slight upward trend, volatility of 10
const data2 = createTrendingArray(data1[449].y , data1[449].x , 2 , 20, 1000); // Start at 80, same trend and volatility
const data3 = data1.concat(data2);

const totalDuration = 2000;
const delayBetweenPoints = totalDuration / data3.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
x: {
  type: 'number',
  easing: 'easeOutExpo',
  duration: delayBetweenPoints,
  from: NaN, // the point is initially skipped
  delay(ctx) {
    if (ctx.type !== 'data' || ctx.xStarted) {
      return 0;
    }
    ctx.xStarted = true;
    return ctx.index * delayBetweenPoints;
  }
},
y: {
  type: 'number',
  easing: 'easeOutExpo',
  duration: delayBetweenPoints,
  from: previousY,
  delay(ctx) {
    if (ctx.type !== 'data' || ctx.yStarted) {
      return 0;
    }
    ctx.yStarted = true;
    return ctx.index * delayBetweenPoints;
  }
}
};
//----------Graph Initialization----------------
const chartProgLine1= new Chart(CProgLine1, {
type: 'line',
data: {
  datasets: [{
    borderColor: 'white',
    borderWidth: 1,
    radius: 0,
    data: data3,
    borderColor: 'rgb(255, 255, 255)', 
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    fill: true,
    order: 1
  },
  {
    borderColor: 'blue',
    borderWidth: 1,
    radius: 0,
    data: data1,
    borderColor: 'rgb(126, 201, 255)',
    backgroundColor: 'rgba(67, 109, 139, 0.5)',
    fill: true,
    order: 0
  }]
},
options: {
  animation,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
      legend: {
          display: false // This will also remove the legend
      }
  }, 
  interaction: {
    intersect: false
  },
  scales: {
    x: {
      type: 'linear',
      ticks: {
          color: 'rgb(84, 143, 185)' // Color for X-axis labels
      },
      grid: {
          color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
          color: 'rgb(84, 143, 185)' // Color for X-axis labels
      },
      grid: {
          color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
      }
    }
  }
}
});

//----------------------------PROGESSIVE LINE CHART 2-----------------------------
const CProgLine2 = document.getElementById('chartProgLine2');

//----------Data ProgLine2--------------
const data1CProgLine2=[];
const data2CProgLine2=[];
let CPL2prev1= 100;
let CPL2prev2= 80;
for (let i = 0; i < 1000; i++) {
CPL2prev1 += 5 - Math.random() * 10;
data1CProgLine2.push({x: i, y: CPL2prev1});
CPL2prev2 += 5 - Math.random() * 10;
data2CProgLine2.push({x: i, y: CPL2prev2});
}

//----------Graph Initialization----------------
let observer5 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const chartProgLine2= new Chart(CProgLine2, {
      type: 'line',
      data: {
        datasets: [{
          borderColor: 'red',
          borderWidth: 1,
          radius: 0,
          data: data1CProgLine2,
          borderColor: 'rgb(126, 201, 255)',
          fill: true
        },
        {
          borderColor: 'blue',
          borderWidth: 1,
          radius: 0,
          data: data2CProgLine2,
          borderColor: 'rgb(255, 255, 255)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // This will also remove the legend
            }
        }, 
        interaction: {
          intersect: false
        },
        scales: {
          x: {
            type: 'linear',
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
                color: 'rgb(84, 143, 185)' // Color for X-axis labels
            },
            grid: {
                color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
            }
          }
        }
      }
    });
      
      // Optional: unobserve the element after animation
      observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer5.observe(chartProgLine2);


//-----------------------MIXED LINE CHART 1---------------------------
const CMixedLine1_1 = document.getElementById('chartMixedLine1_1');
//----------Data MixedLine1--------------
const data1CMixedLine1=[];
const data2CMixedLine1=[];
let CML1prev1= -20;
let CML1prev2= 40;

for (let i = 0; i < 13; i++) {
CML1prev1 = (Math.random() * 200)-100;
data1CMixedLine1.push({x: i, y: CML1prev1});
CML1prev2 = (Math.random() * 200)-100;
data2CMixedLine1.push({x: i, y: CML1prev2});
}


//----------Graph Initialization----------------
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chartMixedLine1_1= new Chart(CMixedLine1_1, {
            type: 'line',
            data: {
              datasets: [{
                borderColor: 'rgb(255, 255, 255)', 
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1,
                radius: 0,
                data: data1CMixedLine1,
                fill: true
              },
              {
                borderColor: 'rgba(126, 201, 255, 1)',
                backgroundColor: 'rgba(126, 201, 255, 0.5)',
                borderWidth: 1,
                radius: 0,
                data: data2CMixedLine1,
                fill: true
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: false,
                  filler: {
                    propagate: false,
                  }, 
              }, 
              interaction: {
                intersect: false
              },
              scales: {
                x: {
                  type: 'linear',
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  }
                },
                y: {
                  ticks: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  }
                }
      
              },
              pointBackgroundColor: '#fff',
              radius: 10,
              interaction: {
                intersect: false,
              },
            }
          });
            
            // Optional: unobserve the element after animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer.observe(CMixedLine1_1);

//-----------------------MIXED BARLINE CHART 1---------------------------
const CMixedBarLine1 = document.getElementById('chartMixedBarLine1');
//----------Data MixedBarLine1--------------
const data1CMixedBarLine1=[];
const data2CMixedBarLine1=[];
let CMBL1prev1= 60;
let CMBL1prev2= -40;

for (let i = 0; i < 25; i++) {
CMBL1prev1 = (Math.random() * 200)-100;
data1CMixedBarLine1.push({x: i, y: CMBL1prev1});
CMBL1prev2 = (Math.random() * 200)-100;
data2CMixedBarLine1.push({x: i, y: CMBL1prev2});
}
//----------Graph Initialization----------------

let observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chartMixedBarLine1= new Chart(CMixedBarLine1, {
            type: 'bar',
            data: {
              datasets: [{
                borderColor: 'rgba(126, 201, 255, 1)',
                backgroundColor: 'rgba(126, 201, 255, 0.5)',
                borderWidth: 1,
                radius: 0,
                data: data1CMixedBarLine1,
                order: 1
              },
              {
                borderColor: 'rgb(255, 255, 255)', 
                backgroundColor: 'rgb(255, 255, 255)',
                borderWidth: 2,
                radius: 2,
                data: data2CMixedBarLine1,
                type: 'line',
                order: 0
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: false,
                  filler: {
                    propagate: false,
                  }, 
              }, 
              interaction: {
                intersect: false
              },
              scales: {
                x: {
                  type: 'linear',
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  }
                },
                y:{
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  },
                  min: -100,
                  max: 100
                }
              },
              pointBackgroundColor: '#fff',
              radius: 10,
              interaction: {
                intersect: false,
              }
            }
          });
            
            // Optional: unobserve the element after animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer2.observe(CMixedBarLine1);

//-----------------------MIXED BAR CHART 1---------------------------
const CMixedBar1 = document.getElementById('chartMixedBar1');
//----------Data CMixedLine1--------------
const data1CMixedBar1=[];
const data2CMixedBar1=[];
let CMB1prev1= 50;
let CMB1prev2= -70;

for (let i = 1; i < 13; i++) {
CMB1prev1 = (Math.random() * 200)-100;
data1CMixedBar1.push(CMB1prev1);
CMB1prev2 = (Math.random() * 200)-100;
data2CMixedBar1.push(CMB1prev2);
}


//----------Graph Initialization----------------

let observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chartMixedBar1= new Chart(CMixedBar1, {
            data: {
              datasets: [{
                type: 'bar',
                borderColor: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                radius: 0,
                data: data1CMixedBar1,
                order: 1
              },
              {
                type: 'bar',
                borderColor: 'rgba(126, 201, 255, 1)',
                backgroundColor: 'rgba(126, 201, 255, 1)',
                borderWidth: 2,
                radius: 2,
                data: data2CMixedBar1,
                order: 0
              }],
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: false,
                  filler: {
                    propagate: false,
                  }, 
              }, 
              interaction: {
                intersect: false
              },
              scales: {
                x:{
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  },
                },
                y:{
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  },
                  min: -100,
                  max: 100
                }
              },
              pointBackgroundColor: '#fff',
              radius: 10,
              interaction: {
                intersect: false,
              }
            }
          });
            
            // Optional: unobserve the element after animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer3.observe(CMixedBar1);

//-----------------------MIXED BAR CHART Y1---------------------------
const CMixedBarY1 = document.getElementById('chartMixedBarY1');
//----------Data CMixedLine1--------------
const data1CMixedBarY1=[];
const data2CMixedBarY1=[];
let CMBY1prev1= 50;
let CMBY1prev2= -70;

for (let i = 1; i < 13; i++) {
CMBY1prev1 = (Math.random() * 200)-100;
data1CMixedBarY1.push(CMBY1prev1);
CMB1prev2 = (Math.random() * 200)-100;
data2CMixedBarY1.push(CMBY1prev2);
}


//-----------Chart Call in-----------------

let observer4 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chartMixedBarY1= new Chart(CMixedBarY1, {
            data: {
              datasets: [{
                type: 'bar',
                borderColor: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                radius: 0,
                data: data1CMixedBar1,
                order: 1
              },
              {
                type: 'bar',
                borderColor: 'rgba(126, 201, 255, 1)',
                backgroundColor: 'rgba(126, 201, 255, 1)',
                borderWidth: 2,
                radius: 2,
                data: data2CMixedBar1,
                order: 0
              }],
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: false,
                  filler: {
                    propagate: false,
                  }, 
              }, 
              interaction: {
                intersect: false
              },
              indexAxis: 'y',
              scales: {
                x:{
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  },
                  min: -100,
                  max: 100
                },
                y:{
                  ticks: {
                    color: 'rgb(84, 143, 185)' // Color for X-axis labels
                  },
                  grid: {
                      color: 'rgb(84, 143, 185)' // Color for X-axis grid lines
                  },
                }
              },
              pointBackgroundColor: '#fff',
              radius: 10,
              interaction: {
                intersect: false,
              }
            }
          });
            
            // Optional: unobserve the element after animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

// Start observing the chart's canvas element
observer4.observe(CMixedBarY1);