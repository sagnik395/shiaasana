import {r as t, j as e, H as i, N as d, F as j, i as m, a as u} from "./index-C6repfoY.js";
import {b as h} from "./calculators-DQ4sxYqB.js";
import {B as x} from "./constants-B_M6LswB.js";
const N = () => {
    const [c,a] = t.useState([])
      , [r,n] = t.useState(0)
      , o = () => {
        a([...c, {
            credits: 0,
            grade: "S"
        }])
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(i, {
            children: [e.jsx("title", {
                children: "SGPA Calculator | Unitastic"
            }), e.jsx("link", {
                rel: "canonical",
                href: x + "/sgpa"
            })]
        }), e.jsx(d, {}), e.jsx("div", {
            className: "container sgpa-container",
            children: e.jsx("div", {
                className: "row d-flex justify-content-center p-3",
                children: e.jsxs("div", {
                    className: "col-lg-6 container shadow bg-white p-3 rounded-3",
                    children: [e.jsx("h4", {
                        className: "text-center",
                        children: "SGPA Calculator"
                    }), e.jsx("p", {
                        children: "Calculate your SGPA based on credits and expected grade."
                    }), e.jsx("hr", {}), e.jsx("button", {
                        className: "btn btn-primary rounded-5",
                        onClick: o,
                        children: "Add Subject"
                    }), c.map( (p, s) => e.jsxs("div", {
                        className: "row mt-3",
                        children: [e.jsx("div", {
                            className: "col-lg-2",
                            children: e.jsxs("p", {
                                className: "mt-1",
                                children: ["Subject ", s + 1]
                            })
                        }), e.jsx("div", {
                            className: "col-5 col-lg-4 mb-2 mb-lg-0",
                            children: e.jsx("input", {
                                type: "number",
                                className: "form-control",
                                id: "credits" + s,
                                placeholder: "Credits",
                                onChange: l => {
                                    a([...c.slice(0, s), {
                                        credits: l.target.value,
                                        grade: c[s].grade
                                    }, ...c.slice(s + 1)])
                                }
                            })
                        }), e.jsx("div", {
                            className: "col-4 col-lg-4 mb-2 mb-lg-0",
                            children: e.jsxs("select", {
                                className: "form-select",
                                id: "grade" + s,
                                onChange: l => {
                                    a([...c.slice(0, s), {
                                        credits: c[s].credits,
                                        grade: l.target.value
                                    }, ...c.slice(s + 1)])
                                }
                                ,
                                children: [e.jsx("option", {
                                    value: "O",
                                    children: "O"
                                }), e.jsx("option", {
                                    value: "A+",
                                    children: "A+"
                                }), e.jsx("option", {
                                    value: "A",
                                    children: "A"
                                }), e.jsx("option", {
                                    value: "B",
                                    children: "B"
                                }), e.jsx("option", {
                                    value: "C",
                                    children: "C"
                                }), e.jsx("option", {
                                    value: "D",
                                    children: "D"
                                }), e.jsx("option", {
                                    value: "F",
                                    children: "F"
                                })]
                            })
                        }), e.jsx("div", {
                            className: "col-3 col-lg-2",
                            children: e.jsx("button", {
                                className: "btn btn-danger d-flex justify-content-center align-items-center rounded-5",
                                onClick: () => {
                                    a([...c.slice(0, s), ...c.slice(s + 1)])
                                }
                                ,
                                children: e.jsx(j, {
                                    icon: m
                                })
                            })
                        })]
                    }, s)), e.jsx("hr", {}), e.jsx("button", {
                        className: "btn btn-primary rounded-5",
                        onClick: () => n(h(c)),
                        children: "Calculate"
                    }), e.jsxs("h5", {
                        className: "text-center mt-3",
                        children: ["Your SGPA is ", r.toFixed(4)]
                    })]
                })
            })
        }), e.jsx(u, {})]
    })
}
;
export {N as default};
