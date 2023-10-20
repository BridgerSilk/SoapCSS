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

        // Font Weight
        if (className.startsWith("font-weight-")) {
            const value7 = className.slice(12)
            element.style["fontWeight"] = value7
        }

        // Margin Top
        if (className.startsWith("margin-top-")) {
          const value8 = className.slice(11)
          element.style["marginTop"] = value8
        }

        // Margin Bottom
        if (className.startsWith("margin-bottom-")) {
          const value9 = className.slice(14)
          element.style["marginBottom"] = value9
        }

        // Margin Left
        if (className.startsWith("margin-left-")) {
          const value10 = className.slice(12)
          element.style["marginLeft"] = value10
        }

        // Margin Right
        if (className.startsWith("margin-right-")) {
          const value11 = className.slice(13)
          element.style["marginRight"] = value11
        }

        // Margin
        if (className.startsWith("margin-")) {
          const value12 = className.slice(7)
          element.style["margin"] = value12
        }

        // Border Radius
        if (className.startsWith("border-radius-")) {
          const value13 = className.slice(14)
          element.style["borderRadius"] = value13
        }

        // Border Color
        if (className.startsWith("border-color-")) {
          const value14 = className.slice(13)
          element.style["borderColor"] = value14
        }

        // Border Width
        if (className.startsWith("border-width-")) {
          const value15 = className.slice(13)
          element.style["borderWidth"] = value15
        }

        // Color
        if (className.startsWith("color-")) {
          const value16 = className.slice(6)
          element.style["color"] = value16
        }
      })
    })
  })
