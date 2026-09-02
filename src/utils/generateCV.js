import { jsPDF } from "jspdf"
import cvData from "../data/cvData"

const MARGIN = 54
const PAGE_WIDTH = 612
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2
const LINE = 12

const addSectionHeader = (doc, y, text) => {
  doc.setFont("times", "bold")
  doc.setFontSize(11)
  doc.text(text.toUpperCase(), MARGIN, y)
  doc.setLineWidth(0.75)
  doc.line(MARGIN, y + 3, MARGIN + CONTENT_WIDTH, y + 3)
  return y + LINE + 6
}

const addWrappedText = (doc, text, x, y, maxWidth, lineHeight = LINE) => {
  const lines = doc.splitTextToSize(text, maxWidth)
  doc.text(lines, x, y)
  return y + lines.length * lineHeight
}

const ensureSpace = (doc, y, needed) => {
  if (y + needed > 792 - MARGIN) {
    doc.addPage()
    return MARGIN
  }
  return y
}

export const generateCV = (lang = "en") => {
  const data = cvData[lang] || cvData.en
  const doc = new jsPDF({ unit: "pt", format: "letter" })
  doc.setTextColor(0, 0, 0)
  let y = MARGIN

  doc.setFont("times", "bold")
  doc.setFontSize(20)
  doc.text(data.name, PAGE_WIDTH / 2, y, { align: "center" })
  y += 20

  doc.setFont("times", "normal")
  doc.setFontSize(11)
  doc.text(data.title, PAGE_WIDTH / 2, y, { align: "center" })
  y += 16

  doc.setFontSize(9.5)
  const contactLine = [data.location, data.email, data.linkedin, data.github].join("   |   ")
  doc.text(contactLine, PAGE_WIDTH / 2, y, { align: "center" })
  y += 10

  doc.setLineWidth(1)
  doc.line(MARGIN, y, MARGIN + CONTENT_WIDTH, y)
  y += 20

  // Summary
  y = addSectionHeader(doc, y, data.labels.summary)
  doc.setFont("times", "normal")
  doc.setFontSize(10)
  y = addWrappedText(doc, data.summary, MARGIN, y, CONTENT_WIDTH)
  y += 14

  // Experience
  y = ensureSpace(doc, y, 40)
  y = addSectionHeader(doc, y, data.labels.experience)
  data.experience.forEach((exp) => {
    y = ensureSpace(doc, y, 50)
    doc.setFont("times", "bold")
    doc.setFontSize(10.5)
    doc.text(exp.company, MARGIN, y)
    doc.text(exp.location, MARGIN + CONTENT_WIDTH, y, { align: "right" })
    y += 13

    doc.setFont("times", "italic")
    doc.setFontSize(10)
    doc.text(exp.role, MARGIN, y)
    doc.text(exp.period, MARGIN + CONTENT_WIDTH, y, { align: "right" })
    y += 13

    doc.setFont("times", "normal")
    doc.setFontSize(9.5)
    exp.bullets.forEach((bullet) => {
      y = ensureSpace(doc, y, 20)
      doc.text("•", MARGIN + 2, y)
      y = addWrappedText(doc, bullet, MARGIN + 14, y, CONTENT_WIDTH - 14, 11.5)
    })
    y += 8
  })

  // Education
  y = ensureSpace(doc, y, 40)
  y = addSectionHeader(doc, y, data.labels.education)
  data.education.forEach((edu) => {
    y = ensureSpace(doc, y, 30)
    doc.setFont("times", "bold")
    doc.setFontSize(10.5)
    doc.text(edu.school, MARGIN, y)
    doc.text(edu.period, MARGIN + CONTENT_WIDTH, y, { align: "right" })
    y += 13

    doc.setFont("times", "italic")
    doc.setFontSize(10)
    doc.text(edu.degree, MARGIN, y)
    y += 16
  })
  y += 4

  // Certifications
  y = ensureSpace(doc, y, 40)
  y = addSectionHeader(doc, y, data.labels.certifications)
  doc.setFont("times", "normal")
  doc.setFontSize(9.5)
  data.certifications.forEach((cert) => {
    y = ensureSpace(doc, y, 16)
    doc.text("•", MARGIN + 2, y)
    y = addWrappedText(doc, cert, MARGIN + 14, y, CONTENT_WIDTH - 14, 11.5)
  })
  y += 10

  // Skills
  y = ensureSpace(doc, y, 40)
  y = addSectionHeader(doc, y, data.labels.skills)
  data.skills.forEach((group) => {
    y = ensureSpace(doc, y, 20)
    doc.setFont("times", "bold")
    doc.setFontSize(9.5)
    const label = `${group.group}: `
    doc.text(label, MARGIN, y)
    const labelWidth = doc.getTextWidth(label)
    doc.setFont("times", "normal")
    y = addWrappedText(doc, group.items.join(", "), MARGIN + labelWidth, y, CONTENT_WIDTH - labelWidth, 11.5)
  })

  const filename = lang === "es" ? "Miguel_Pineda_CV_ES.pdf" : "Miguel_Pineda_CV_EN.pdf"
  doc.save(filename)
}

export default generateCV
