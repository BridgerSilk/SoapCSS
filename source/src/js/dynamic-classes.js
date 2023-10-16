document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("*").forEach(element => {
      element.classList.forEach(className => {
        // Background Color
        if (className.startsWith("background-color-")) {
          const value1 = className.slice(17)
          element.style["backgroundColor"] = "#" + value1
        }

        // Padding Left
        if (className.startsWith("padding-left-")) {
            const value2 = className.slice(13)
            element.style["paddingLeft"] = value2
        }

        // Padding Left
        if (className.startsWith("padding-right-")) {
            const value3 = className.slice(14)
            element.style["paddingRight"] = value3
        }

        // Padding Top
        if (className.startsWith("padding-top-")) {
            const value3 = className.slice(12)
            element.style["paddingTop"] = value3
        }

        // Padding Bottom
        if (className.startsWith("padding-bottom-")) {
            const value4 = className.slice(15)
            element.style["paddingBottom"] = value4
        }

        // Padding
        if (className.startsWith("padding-")) {
            const value5 = className.slice(8)
            element.style["padding"] = value5
        }

        // Font Size
        if (className.startsWith("font-size-")) {
            const value6 = className.slice(10)
            element.style["fontSize"] = value6
        }
      })
    })
  })
