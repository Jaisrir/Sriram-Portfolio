import React, { useState } from 'react';
import { 
  ShieldCheck, X, Download, Printer, ExternalLink, 
  CheckCircle2, FileText, ZoomIn, ZoomOut, RotateCw
} from 'lucide-react';

interface ExperienceLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceLetterModal: React.FC<ExperienceLetterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'scan' | 'letterhead' | 'embed'>('scan');
  const [zoom, setZoom] = useState<number>(100);

  if (!isOpen) return null;

  const pdfUrl = '/wise-work-experience-letter.pdf';
  const imageUrl = '/wise-work-experience-letter.png';

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 20, 180));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 20, 60));
  const handleResetZoom = () => setZoom(100);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950/95 border-b border-white/10 shrink-0 gap-2">
          <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs overflow-hidden">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-bold truncate">WISE WORK EXPERIENCE LETTER • SRIRAM E</span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-bold shrink-0">
              OFFICIAL RECORD
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-900 border border-white/10 rounded-lg p-0.5 text-xs font-mono">
              <button
                id="exp-tab-scan"
                onClick={() => setActiveTab('scan')}
                className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                  activeTab === 'scan' ? 'bg-cyan-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="View original uploaded document scan"
              >
                Document Scan
              </button>
              <button
                id="exp-tab-letterhead"
                onClick={() => setActiveTab('letterhead')}
                className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                  activeTab === 'letterhead' ? 'bg-cyan-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="View formatted corporate letterhead"
              >
                Interactive
              </button>
              <button
                id="exp-tab-embed"
                onClick={() => setActiveTab('embed')}
                className={`hidden sm:inline-block px-2.5 py-1 rounded-md transition-all font-semibold ${
                  activeTab === 'embed' ? 'bg-cyan-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="View PDF browser plugin"
              >
                PDF Plugin
              </button>
            </div>

            {/* Direct Open PDF / Download */}
            <a
              id="exp-download-pdf-btn"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Wise_Work_Experience_Letter_Sriram_E.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-200 bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-500/40 rounded-lg transition-colors"
              title="Download original PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-950 font-bold bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-sm"
              title="Print document or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Canvas */}
        <div className="flex-1 bg-slate-950 overflow-y-auto p-3 sm:p-6 flex flex-col items-center">
          
          {/* TAB 1: High-Res Original Document Scan (Guaranteed to render perfectly on all browsers & iframes) */}
          {activeTab === 'scan' && (
            <div className="w-full max-w-3xl flex flex-col items-center">
              {/* Zoom Toolbar */}
              <div className="w-full flex items-center justify-between pb-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Original Document Render (Uploaded PDF)</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 border border-white/10 rounded-lg px-2 py-1">
                  <button 
                    onClick={handleZoomOut} 
                    className="p-1 hover:text-white transition-colors cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-200 px-1 w-10 text-center">{zoom}%</span>
                  <button 
                    onClick={handleZoomIn} 
                    className="p-1 hover:text-white transition-colors cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={handleResetZoom} 
                    className="p-1 text-[10px] text-cyan-400 hover:underline ml-1 cursor-pointer"
                    title="Reset Zoom"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Document Image Container with High-Res Scan */}
              <div 
                className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex justify-center transition-transform duration-150"
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
              >
                <img
                  src={imageUrl}
                  alt="Wise Work Experience Letter - Sriram E"
                  className="w-full h-auto object-contain select-none block"
                  loading="eager"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Clean Typography Letterhead Matching the Official Letter Exactly */}
          {activeTab === 'letterhead' && (
            <div className="w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-8 sm:p-12 font-sans relative">
              {/* Header */}
              <div className="flex items-start justify-between border-b-2 border-slate-200 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-white font-bold text-xl shadow">
                      WW
                    </div>
                    <div>
                      <h2 className="text-2xl font-black tracking-tight text-slate-950">Wise Work</h2>
                      <p className="text-[11px] text-slate-500 font-mono tracking-wider uppercase">Confidential</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono mt-3 max-w-sm leading-relaxed">
                    Wise Work, SV Arcade, 3rd floor, 6th Main Road, Thayappa Garden, Ranka Colony, Bilekahalli, Bengaluru – 560076
                  </p>
                </div>
                <div className="text-right font-mono text-xs space-y-1">
                  <div className="font-bold text-slate-900">Ref: WW/HR/2025</div>
                  <div className="text-slate-600">22 September 2025</div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center py-4 mb-4">
                <h3 className="text-sm sm:text-base font-mono font-bold tracking-widest text-slate-950 uppercase border-b-2 border-slate-950 inline-block pb-1">
                  TO WHOMSOEVER IT MAY CONCERN
                </h3>
              </div>

              {/* Body */}
              <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
                <p>
                  This is to certify that <strong className="text-slate-950 font-bold">Sriram E</strong> has been employed with Wise Work as a <strong className="text-slate-950 font-semibold">“Software Engineer Trainee”</strong> from <strong className="text-slate-950 font-semibold">23 December 2024 to 10 September 2025</strong>. During his tenure with us, he demonstrated a high level of professionalism, dedication, and competence in his role.
                </p>

                <p>
                  He consistently showed great initiative and a proactive approach to his work, contributing significantly to the success of our projects. He possesses skills and has proven to be an asset to the team.
                </p>

                <p>
                  We appreciate his valuable contributions during his tenure with Wise Work and wish him all the best in his future endeavors.
                </p>
              </div>

              {/* Sign-off */}
              <div className="mt-10 pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-mono text-slate-600 font-bold uppercase mb-2">For Wise Work</p>
                  <img
                    src="/wise-work-signature.jpg"
                    alt="Ridhi Chaudhary Signature"
                    className="h-12 w-auto object-contain mb-2 mix-blend-multiply"
                  />
                  <div className="text-xs text-slate-800 space-y-0.5">
                    <div className="font-bold text-slate-950 text-sm">Ridhi Chaudhary</div>
                    <div className="text-slate-600">People Analyst Lead,</div>
                    <div className="text-slate-600">People Team, Wise Work.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-right">
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 font-mono font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Tenure</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 mt-0.5">
                    23 Dec 2024 – 10 Sep 2025 (9 Mos)
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    Role: Software Engineer Trainee
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Embedded Iframe PDF Plugin */}
          {activeTab === 'embed' && (
            <div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 relative shadow-2xl flex flex-col">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full flex-1 border-none"
                title="Wise Work Experience Letter PDF Plugin"
              />
              <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 px-4">
                <span>Note: Some browser sandbox security settings disable embedded PDF plugins.</span>
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open PDF in New Window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-5 py-3.5 bg-slate-950/95 border-t border-white/10 flex items-center justify-between shrink-0 gap-3">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">Ref: WW/HR/2025 • Wise Work Software Engineer Trainee</span>
            <span className="sm:hidden">Ref: WW/HR/2025</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              id="exp-open-external-btn"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
