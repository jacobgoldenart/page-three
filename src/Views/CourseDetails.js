// import ClassTable from "../Components/ClassTable";
import "./CourseDetails.css";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { TermsContext } from "../App";
import useFetch from "../Components/utils/useFetch";
import uuid from "react-uuid";

function CourseDetails() {
  const [termData, setTermData] = useState();
  const terms = useContext(TermsContext);
  let location = useLocation();
  const { get } = useFetch();

  useEffect(() => {
    // get(`${location.pathname.slice(16)}`).then((data) => {
    get(`${location.pathname}`).then((data) => {
      setTermData(data);
    });
  }, [location]);

  return (
    <div className="page-schedule-details">
      <article id="skip">
        <aside className="side-nav">
          <ul className="toc-wrapper">
            {termData &&
              termData.map((item) => (
                <li key={uuid()} className="toc-card">
                  <a href={"#" + item.subject_code + "-" + item.catalog_number}>
                    {item.subject_code + " " + item.catalog_number}
                  </a>
                </li>
              ))}
          </ul>
        </aside>
        <section>
          <div className="toc-header">
            <h1>Subject Name</h1>
            <h2>All Courses in SubjectName available in term</h2>
          </div>
          <div className="table-section">
            <div className="table">
              <h2 id="ANTH-1">ANTH 1 - Intro to Biological Anth - 3 Units</h2>
              <p>
                Covers the concepts, methods of inquiry, and theory of
                biological evolution and their application to the human species.
                There is a specific focus on molecular, Mendelian and population
                genetics, mechanisms of evolution, primatology,
                paleoanthropology, biocultural adaptations, and human variation.
                The scientific method serves as the foundation to the course.
              </p>
              <div className="sc-dmRaPn drxpNH">
                <div className="sc-fLlhyt gcPjVa">
                  <div className="sc-bczRLJ jNMKxq rdt_Table" role="table">
                    <div
                      className="sc-gsnTZi cOUORS rdt_TableHead"
                      role="rowgroup"
                    >
                      <div
                        className="sc-dkzDqf eOtTIX rdt_TableHeadRow"
                        role="row"
                      >
                        <div className="sc-hKMtZM sc-bBrHrO cLRkKo sWLRd" />
                        <div
                          data-column-id={1}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR CVSlS qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={1}
                            data-sort-id={1}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={1} className="sc-evZas dFsTSm">
                              Seats available
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={2}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR kdAjTu qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={2}
                            data-sort-id={2}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={2} className="sc-evZas dFsTSm">
                              Instructor
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={3}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR hfhJZN qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={3}
                            data-sort-id={3}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={3} className="sc-evZas dFsTSm">
                              Building
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={4}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR cdcITA qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={4}
                            data-sort-id={4}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={4} className="sc-evZas dFsTSm">
                              Days
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={5}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR bOjHZH qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={5}
                            data-sort-id={5}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div
                              data-column-id={5}
                              className="sc-evZas dFsTSm"
                              title="Start Time"
                            >
                              Start Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={6}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR BUUBP qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={6}
                            data-sort-id={6}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={6} className="sc-evZas dFsTSm">
                              End Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sc-hHLeRK fnSgVj rdt_TableBody"
                      role="rowgroup"
                    >
                      <div
                        id="row-0"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">13</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Scarry,Clara</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                      <div
                        id="row-1"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">21</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Scarry,Clara</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <h2 id="ANTH-101">ANTH 101 - Cultural Diversity - 3 Units</h2>
              <p>
                Focuses on analyzing the historically conditioned political,
                economic and social factors that have contributed to cultural
                diversity in the U.S; a critical anthropological approach is
                developed to explore the intersection of race, class, gender,
                ethnicity and sexuality; the political economy of institutions
                and ideas, such as racism, classism, sexual stereotyping,
                family, religion, state, color-blindness, multiculturalism,
                etc.; and, discourses of cultural diversity in the U.S.
              </p>
              <div className="sc-dmRaPn drxpNH">
                <div className="sc-fLlhyt gcPjVa">
                  <div className="sc-bczRLJ jNMKxq rdt_Table" role="table">
                    <div
                      className="sc-gsnTZi cOUORS rdt_TableHead"
                      role="rowgroup"
                    >
                      <div
                        className="sc-dkzDqf eOtTIX rdt_TableHeadRow"
                        role="row"
                      >
                        <div className="sc-hKMtZM sc-bBrHrO cLRkKo sWLRd" />
                        <div
                          data-column-id={1}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR CVSlS qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={1}
                            data-sort-id={1}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={1} className="sc-evZas dFsTSm">
                              Seats available
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={2}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR kdAjTu qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={2}
                            data-sort-id={2}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={2} className="sc-evZas dFsTSm">
                              Instructor
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={3}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR hfhJZN qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={3}
                            data-sort-id={3}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={3} className="sc-evZas dFsTSm">
                              Building
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={4}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR cdcITA qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={4}
                            data-sort-id={4}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={4} className="sc-evZas dFsTSm">
                              Days
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={5}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR bOjHZH qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={5}
                            data-sort-id={5}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div
                              data-column-id={5}
                              className="sc-evZas dFsTSm"
                              title="Start Time"
                            >
                              Start Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={6}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR BUUBP qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={6}
                            data-sort-id={6}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={6} className="sc-evZas dFsTSm">
                              End Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sc-hHLeRK fnSgVj rdt_TableBody"
                      role="rowgroup"
                    >
                      <div
                        id="row-0"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">8</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Barata,Data D</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                      <div
                        id="row-1"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">17</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Trichur,Raghu S</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <h2 id="ANTH-118">ANTH 118 - The Anthropocene - 3 Units</h2>
              <p>
                Designed to challenge students to critically evaluate past human
                relationships with their environment at the local, regional, and
                global scale over the past 10,000 years. The diachronic
                perspective of the course provides students with a broader
                understanding of contemporary challenges, such as anthropogenic
                climate change and declining biodiversity, that is rooted in our
                prehistoric past.
              </p>
              <div className="sc-dmRaPn drxpNH">
                <div className="sc-fLlhyt gcPjVa">
                  <div className="sc-bczRLJ jNMKxq rdt_Table" role="table">
                    <div
                      className="sc-gsnTZi cOUORS rdt_TableHead"
                      role="rowgroup"
                    >
                      <div
                        className="sc-dkzDqf eOtTIX rdt_TableHeadRow"
                        role="row"
                      >
                        <div className="sc-hKMtZM sc-bBrHrO cLRkKo sWLRd" />
                        <div
                          data-column-id={1}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR CVSlS qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={1}
                            data-sort-id={1}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={1} className="sc-evZas dFsTSm">
                              Seats available
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={2}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR kdAjTu qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={2}
                            data-sort-id={2}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={2} className="sc-evZas dFsTSm">
                              Instructor
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={3}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR hfhJZN qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={3}
                            data-sort-id={3}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={3} className="sc-evZas dFsTSm">
                              Building
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={4}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR cdcITA qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={4}
                            data-sort-id={4}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={4} className="sc-evZas dFsTSm">
                              Days
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={5}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR bOjHZH qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={5}
                            data-sort-id={5}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div
                              data-column-id={5}
                              className="sc-evZas dFsTSm"
                              title="Start Time"
                            >
                              Start Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={6}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR BUUBP qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={6}
                            data-sort-id={6}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={6} className="sc-evZas dFsTSm">
                              End Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sc-hHLeRK fnSgVj rdt_TableBody"
                      role="rowgroup"
                    >
                      <div
                        id="row-0"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">6</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Fisher,Jacob L</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <h2 id="ANTH-166">
                ANTH 166 - Rise of Religious Cults - 3 Units
              </h2>
              <p>
                Examination of cult movements, involving comparisons of the
                ideals, objectives and symbolic processes common to ecstatic
                religious movements throughout the world -- from Melanesian
                cargo cults to the Peoples' Temple. Anthropological perspectives
                are used to examine religious cults as conscious attempts to
                perpetuate traditional values and social goals or to radically
                change the status quo; millenarian movements, crisis cults,
                nature communes, exotic religious importations, and cult
                characteristics of modern secular movements.
              </p>
              <div className="sc-dmRaPn drxpNH">
                <div className="sc-fLlhyt gcPjVa">
                  <div className="sc-bczRLJ jNMKxq rdt_Table" role="table">
                    <div
                      className="sc-gsnTZi cOUORS rdt_TableHead"
                      role="rowgroup"
                    >
                      <div
                        className="sc-dkzDqf eOtTIX rdt_TableHeadRow"
                        role="row"
                      >
                        <div className="sc-hKMtZM sc-bBrHrO cLRkKo sWLRd" />
                        <div
                          data-column-id={1}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR CVSlS qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={1}
                            data-sort-id={1}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={1} className="sc-evZas dFsTSm">
                              Seats available
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={2}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR kdAjTu qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={2}
                            data-sort-id={2}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={2} className="sc-evZas dFsTSm">
                              Instructor
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={3}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR hfhJZN qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={3}
                            data-sort-id={3}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl eKrTtn rdt_TableCol_Sortable"
                            disabled=""
                          >
                            <div data-column-id={3} className="sc-evZas dFsTSm">
                              Building
                            </div>
                          </div>
                        </div>
                        <div
                          data-column-id={4}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR cdcITA qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={4}
                            data-sort-id={4}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={4} className="sc-evZas dFsTSm">
                              Days
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={5}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR bOjHZH qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={5}
                            data-sort-id={5}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div
                              data-column-id={5}
                              className="sc-evZas dFsTSm"
                              title="Start Time"
                            >
                              Start Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                        <div
                          data-column-id={6}
                          className="sc-hKMtZM sc-eCYdqJ sc-iqcoie jYPiPR BUUBP qVZpv rdt_TableCol"
                        >
                          <div
                            data-column-id={6}
                            data-sort-id={6}
                            role="columnheader"
                            tabIndex={0}
                            className="sc-crXcEl jNENvb rdt_TableCol_Sortable"
                          >
                            <div data-column-id={6} className="sc-evZas dFsTSm">
                              End Time
                            </div>
                            <span className="sc-kDDrLX gNpdTd">▲</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sc-hHLeRK fnSgVj rdt_TableBody"
                      role="rowgroup"
                    >
                      <div
                        id="row-0"
                        role="row"
                        className="sc-jqUVSM hjBMSB rdt_TableRow"
                      >
                        <div className="sc-hKMtZM sc-ftvSup hOTuCv fAUzZo">
                          <button
                            aria-disabled="false"
                            data-testid="expander-button-undefined"
                            aria-label="Expand Row"
                            type="button"
                            className="sc-iBkjds fztWMJ"
                          >
                            <svg
                              fill="currentColor"
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                              <path d="M0-.25h24v24H0z" fill="none" />
                            </svg>
                          </button>
                        </div>
                        <div
                          id="cell-1-undefined"
                          data-column-id={1}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo CVSlS dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">6</div>
                        </div>
                        <div
                          id="cell-2-undefined"
                          data-column-id={2}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo kdAjTu goNamB rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">Murphy,Liam D</div>
                        </div>
                        <div
                          id="cell-3-undefined"
                          data-column-id={3}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo hfhJZN dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents">WEB</div>
                        </div>
                        <div
                          id="cell-4-undefined"
                          data-column-id={4}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo cdcITA dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-5-undefined"
                          data-column-id={5}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo bOjHZH dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                        <div
                          id="cell-6-undefined"
                          data-column-id={6}
                          role="gridcell"
                          className="sc-hKMtZM sc-eCYdqJ sc-jSMfEi cLRkKo BUUBP dBbhDz rdt_TableCell"
                          data-tag="allowRowEvents"
                        >
                          <div data-tag="allowRowEvents" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="legend">
            <h2>Legend</h2>
            <ul>
              <li>
                <span>
                  <img
                    src="http://www.csus.edu/dev/class_schedule/book-icon-big.png"
                    alt="Book Legend Icon"
                  />
                </span>
                The icon links you to the identified course materials list.
              </li>
              <li>
                <span>
                  <img
                    src="http://www.csus.edu/dev/class_schedule/low-cost-book-icon-big.png"
                    alt="Low Cost Course Materials Legend Icon"
                  />
                </span>
                This course has been identified as having total course material
                costs under $40.00. Costs are determined by the campus
                affiliated book store. Availability of low cost materials may be
                limited to bookstore availability.
              </li>
              <li>
                <span>
                  <img
                    src="http://www.csus.edu/dev/class_schedule/zero-cost-book-icon-big.png"
                    alt="Zero Cost Course Materials Legend Icon"
                  />
                </span>
                This course has been identified as having Zero cost course
                materials.
              </li>
            </ul>
          </div>
          <div class="attributes">
            <h2>Class Attribute Codes</h2>
            <ul>
              <li>
                <span>HY</span>- Hybrid (OnLine & In-Person Meetings)
              </li>
              <li>
                <span>I</span>- Service Learning Internship
              </li>
              <li>
                <span>OL</span>- Online
              </li>
            </ul>
          </div>
          <div class="session">
            <h2>Session Codes</h2>
            <ul>
              <li>
                <span>1</span>- Regular Academic Session (01/24/2022 to
                05/13/2022)
              </li>
              <li>
                <span>SNS</span>- Self Support Nonstandard Dates (01/24/2022 to
                05/22/2022)
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}

export default CourseDetails;
