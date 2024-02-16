# **Swift Guide to Utilizing Google Colab**

##### Author:                 [Msc. Ing. Carlos Andrés Celi Sánchez](https://fragrant-knight-4af.notion.site/My-Personal-Page-for-Academic-Use-5c5f007b3f3f4c76a604960d9dbffca7).

>##### Year:                   Feb - 2024


# **Parabolic Motion: Mathematical Exploration**
---
## **Introduction**
---
The study of parabolic motion is a cornerstone in the field of classical mechanics, a branch of physics that deals with the motion of objects. This concept is rooted in the work of **[Galileo Galilei](https://es.wikipedia.org/wiki/Galileo_Galilei)** in the early 17th century, who was among the first to analyze the trajectory of projectiles and assert that, in the absence of air resistance, objects follow a parabolic path when thrown. This discovery laid the groundwork for Newton's laws of motion and the field of kinematics.

<div align="center"
<div style="width: 400px; height: 400px; overflow: hidden; margin: auto;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/220px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg" alt="Galileo Galilei" style="height: 400px; max-width: 100%; margin: auto; display: block;box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);">
  <p><a href="https://es.wikipedia.org/wiki/Galileo_Galilei"><strong>Galileo Galilei</strong></a></p>
</div>
</div>


In Civil Engineering, the principles of parabolic motion are applied extensively in the design and construction of structures and infrastructures. The understanding of these principles allows engineers to calculate the optimal angles and forces required for the stability and durability of bridges and other structures, especially when considering the arcs of suspension bridges, which often mimic the parabolic trajectory.

Furthermore, the concepts derived from parabolic motion are essential in the design of roads and highways, where engineers must consider the parabolic arcs formed by vehicles traveling over hills or the optimal angles for ramps. This understanding not only enhances the functionality and safety of transportation systems but also contributes to the aesthetic appeal of civil engineering projects. Through the application of these timeless principles, civil engineers are able to innovate and create structures that not only meet the demands of the present but also stand as testaments to the enduring legacy of the foundational physics behind parabolic motion.

---
## **Mathematical Derivation**
---
The motion of a projectile in a gravitational field can be accurately described by breaking it down into two independent components: the horizontal $(x-axis)$ and vertical $(y-axis)$ motions. This separation is possible because, under the influence of gravity alone (neglecting air resistance), the horizontal motion of a projectile experiences no acceleration, while its vertical motion is uniformly accelerated. This concept stems from the principles of kinematics in classical mechanics.

---
### **Origin of the Equations**
---
The equations governing the motion of a projectile are derived from the basic principles of kinematics. When an object is projected into the air at an angle $\theta$ with an initial velocity $v_0$, its velocity can be decomposed into two components: $v_{0x} = v_0 \cos(\theta)$ for horizontal motion and $v_{0y} = v_0 \sin(\theta)$ for vertical motion. The horizontal component remains constant throughout the flight, as there are no forces acting in the horizontal direction (assuming air resistance is negligible). In contrast, the vertical component is affected by gravity, causing the projectile to accelerate downwards at a rate of $g$ (the acceleration due to gravity).

---
### **Derivation of the Equations**
---
- **Horizontal Motion**: The horizontal position $x$ at any time $t$ can be found by integrating the horizontal velocity $v_{0x}$ over time, since velocity is the derivative of position with respect to time. Hence, the equation for horizontal motion is derived as:

  $$ x = v_0 \cos(\theta) t $$

  This equation indicates that the horizontal distance traveled by the projectile is directly proportional to the time elapsed and the horizontal component of the initial velocity.

- **Vertical Motion**: The vertical position $y$ at any time $t$ is influenced by the initial vertical velocity $v_{0y}$ and the acceleration due to gravity. Integrating the vertical velocity over time gives the displacement, and considering the acceleration due to gravity yields:

  $$ y = v_0 \sin(\theta) t - \frac{1}{2} g t^2 $$

  This equation accounts for the upward initial velocity, reducing over time due to gravity, until the projectile starts descending, following a parabolic trajectory.

where:
- $(x, y)$ are the coordinates of the projectile at any time $t$.
- $v_0$ is the initial velocity.
- $\theta$ is the launch angle with respect to the horizontal.
- $g$ is the acceleration due to gravity on Earth ($9.8 \, \text{m/s}^2$).
- $t$ is the time elapsed since launch.

---
### **Comprehensive Understanding**
---
The parabolic trajectory of a projectile is thus a consequence of the linear, constant-speed motion in the horizontal direction and the uniformly accelerated motion in the vertical direction due to gravity. The beauty of these equations lies in their simplicity and power to predict the exact location of a projectile at any point in time during its flight, providing a fundamental tool for analyzing motion in physics and engineering applications.

---
### **Derivation**
---
The horizontal motion is uniform since there is no acceleration in the x-axis (ignoring air resistance). Thus, the horizontal distance $(x)$ covered is simply the initial velocity in the x-direction times time.

The vertical motion, however, is affected by gravity, causing a uniform acceleration downwards. The vertical position $(y)$ is determined by the initial velocity in the y-direction, minus the displacement caused by gravitational acceleration over time.

---
### **Parabolic Trajectory Equation**
---
Combining these components, the trajectory of the projectile can be described by eliminating $(t)$:

$$ y = x \tan(\theta) - \frac{g x^2}{2 v_0^2 \cos^2(\theta)} $$

This equation represents a parabola, demonstrating that, theoretically, a projectile's path is parabolic under the influence of gravity alone.


#### **Variables Explained**

- $(x, y)$: Position coordinates of the projectile
- $(v_0)$: Initial launch velocity
- $(\theta)$: Launch angle with respect to the horizontal
- $(g)$: Acceleration due to gravity
- $(t)$: Time elapsed since launch

---
## **Example**
---
Consider a projectile launched with an initial velocity of **20 m/s** at a **45° angle**. Calculate the maximum height and range of the projectile.

### **Solution**

1. **Utilizing the Parabolic Trajectory Equation**

  The parabolic trajectory equation is given by:

  $$ y = x \tan(\theta) - \frac{g x^2}{2 v_0^2 \cos^2(\theta)} $$



2. **Finding the Maximum Height**

  We need to understand that the maximum, or $(Y_{\text{max}})$, doesn't directly depend on \(x\) in this form of the equation but on the time at which the projectile's vertical velocity component becomes zero.

  However, we can analyze the equation to understand how the maximum is calculated in the context of the physics of parabolic motion. The maximum height reached by the projectile, $(Y_{\text{max}})$, occurs at the vertex of its parabolic trajectory. For a projectile launched into the air, this happens at the highest point of the trajectory, where the vertical speed is zero. At this point, the only forces acting on the projectile are its initial upward velocity and the acceleration due to gravity pulling it back down.

  The equation to calculate the maximum height is derived from the basic principles of kinematics:

  
  $$ y_{\text{max}} = \frac{v_0^2 \sin^2(\theta)}{2g} $$

  Substituting : $v_0 = 20 \, m/s$, $\theta = 45^\circ$, and $g = 9.8 \, m/s^2 $:

  $$ y_{\text{max}} = \frac{(20)^2 \sin^2(45^\circ)}{2 \times 9.8} \approx 20.2 \, m $$

  The calculation reveals that the projectile reaches a maximum height of approximately 20.2 meters.

3. **Calculating the Max Range**

  The range $x_{\text{max}}$ of the projectile can be found using the equation:

  $$x_{\text{max}} = \frac{v_0^2 \sin(2\theta)}{g}$$

  Given $\theta = 45^\circ$, and substituting the values:

  $$ x_{\text{max}} = \frac{(20)^2 \sin(90^\circ)}{9.8} \approx 40.8 \, m $$

  This equation calculates the maximum horizontal distance $x$ the projectile travels under the influence of gravity, assuming launch and landing at the same height.

### **Conclusion**
Through this example, we have calculated both the maximum height and range of a projectile launched at an initial speed of 20 m/s and an angle of 45°. This exercise illustrates the direct application of parabolic motion equations to solve practical problems in physics and engineering.

---
## **Projectile Motion Analysis**
---

In this exercise, we examine the trajectory of a projectile launched with an initial velocity at a specific angle to the horizontal. Using Python libraries, we calculate the projectile's path and identify the maximum height reached during its flight.

### **Problem Statement**

A projectile is launched with an initial velocity `vo = 8 m/s` at a launch angle `phi` with respect to the horizontal. We aim to determine the projectile's trajectory and its maximum height using Python for computational analysis.

### **Approach**

1. **Importing Necessary Libraries**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```
   We use `numpy` for numerical operations, `pandas` for data organization, and `matplotlib.pyplot` for visualization.

2. **Defining Constants and Initial Conditions**

  The initial velocity (vo), launch angle (phi), and acceleration due to gravity (g) are set. The launch angle is converted from degrees to radians for computational purposes.
  
```python  
vo = 8                    # Initial velocity
phi = np.radians(45)      # Launch angle with respect to the horizontal
g = 9.80                  # Gravity acceleration
```
3. **Calculating the Trajectory**

  Using the equation of motion for a projectile under gravity, we calculate the x and y positions at various time intervals within the expected flight duration.

  $$ y = x \tan(\theta) - \frac{g x^2}{2 v_0^2 \cos^2(\theta)} $$
  
```python 
x = []                                               # Initialize an empty list to store x-coordinates of the projectile
y = []                                               # Initialize an empty list to store y-coordinates of the projectile

# Loop over a range of x-values to calculate the corresponding y-values
# using the projectile motion formula
for xi in np.arange(0, 6.56, 0.04):                  # Start at x=0, end at x=6.56, with a step of 0.04
    x.append(xi)                                     # Add the current x-value to the list of x-coordinates
    # Calculate the y-value using the projectile equation and add it to the list of y-coordinates
    y.append(xi * np.tan(phi) - (g * xi**2) / (2 * vo**2 * np.cos(phi)**2))

# Create a DataFrame from the lists of x and y values with corresponding column labels
results = pd.DataFrame({'X [m]': x, 'Y [m]': y})

# Display the DataFrame showing all rows to view the trajectory data
results.head(len(results))
```

3. **Finding the Maximum Height**

  We search for the maximum y value in our dataset, which corresponds to the maximum height (max_Y) the projectile achieves.
  
```python 
max_Y = np.max(results.iloc[1:,1])
x_row = np.where(results['Y [m]'] == max_Y)
x_row = x_row[0].tolist()
x_value = results.iloc[x_row[0],0]
print(x_value, max_Y)
```

4. **Plotting the Results**

  A scatter plot is generated to visualize the trajectory. The point of maximum height is highlighted and labeled on the graph.

```python 
fig,ax = plt.subplots(figsize = (16/1.2,9/1.2))

ax.plot(x, y, linewidth=1, marker='+', color=(0, 0, 0), markerfacecolor='w', markeredgewidth=0, alpha=0.8, label= 'Results')
ax.scatter(x_value, max_Y, label=f'Max Y = {max_Y:.2f}  m')
ax.set_title('Parabolic Motion', fontsize = 10, color = (0,0,1))
ax.set_xlabel('X [m]')
ax.set_ylabel('Y [m]')
ax.set_xlim(0, max(x))
ax.set_ylim(0, max(y)*1.05)
ax.grid(which='both', axis = 'x', alpha=0.5)
legend = ax.legend(loc='upper right', bbox_to_anchor=(1, 1), fontsize=9)
legend.get_frame().set_edgecolor('none')
```

### **Conclusion**

Through the application of physics equations and Python programming, we successfully model the projectile's parabolic path and determine its maximum height to be approximately 1.63 m. This approach can be extended to various projectile motion problems to predict trajectories and optimize launch parameters for desired outcomes.

---
## **Parabolic Motion Simulation with [P5js](https://p5js.org/)**
---

<div align="center">
   <img src= "https://github.com/Normando1945/Para-Profesores/assets/62081230/d6ab505c-7936-435c-9073-ba0927a9d6b8">
</div>


This **P5js** script simulates the parabolic trajectory of a projectile. The initial setup includes variables for position (`x`, `y`), angle (`phi`), gravity (`g`), and initial velocity (`vo`). It also prepares for user interaction with `inputVo` for velocity adjustment and a `buttonStart` to initiate the animation.

In the `setup()` function, the canvas is created, and UI elements are positioned. Angle `phi` is converted from degrees to radians to work with trigonometric functions.

The `draw()` function is responsible for animating the projectile's motion. It updates the projectile's position, draws its trajectory, and displays the current position (`x`, `y`) in meters. The projectile's x-position is incremented in each frame to simulate motion.

A restart function `restartAnimation()` is included, allowing the user to reset the simulation with a new initial velocity.

This code is a comprehensive example of integrating physics, user input, and animation in **P5js**, showcasing the dynamics of parabolic motion.

For detailed implementation, please refer to the provided script in the **P5js** environment.


* Link to the interactive animation

  **[Animacion](https://editor.p5js.org/Normando1945/full/ZXJUz84sr)**

* Link to the source code

  **[Code](https://editor.p5js.org/Normando1945/sketches/ZXJUz84sr)**

  ---
# **Quiz Questions**
---

**1. How does the launch angle ($\theta$) affect a projectile's motion in terms of its parabolic trajectory?**

   A) Increases the maximum height without altering the horizontal range.

   B) Modifies the horizontal range without influencing the maximum height.

   C) Affects both the maximum height and the horizontal range of the projectile.

   D) Determines the initial velocity required to reach a specific target.

**2. When the initial velocity of a projectile is doubled, how is its range affected in the absence of air resistance?**

   A) It doubles, maintaining the same maximum height.

   B) It quadruples, due to the proportional increase in both horizontal and vertical velocities.

   C) It increases, but less than doubling due to the influence of gravity.
   
   D) Changes proportionally to the square of the initial velocity, significantly increasing the range.
   
**3. Which factor is not considered in the basic equations of parabolic motion?**

   A) The influence of gravity on the projectile's trajectory.

   B) The effect of the launch angle on the total distance traveled.

   C) Air resistance and its effect on slowing down the projectile.

   D) The initial velocity and its direct impact on the projectile's range and height.

**4. At what launch angle is the range of a projectile maximized, ignoring air resistance?**

   A) 30 degrees, favoring a higher altitude at the expense of range.

   B) 45 degrees, optimally balancing maximum height and range.

   C) 60 degrees, prioritizing height over horizontal range.

   D) 90 degrees, resulting in the maximum possible height with no horizontal range.

**5. Considering a projectile launched in an environment with no air resistance, which of the following statements about the initial velocity ($v_0$) is correct?**

   A) A higher $v_0$ increases only the maximum height reached by the projectile.

   B) The $v_0$ has no effect on the horizontal range of the projectile.

   C) Increasing $v_0$ results in a proportional increase in both maximum height and horizontal range.
   
   D) Only specific values of $v_0$ allow the projectile to reach the highest point of its parabolic trajectory.



