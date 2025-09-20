import { Button } from "@/components/ui/button";

export function Menu() {
  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2  bg-[red] rounded-[200px] h-12 w-5/12">
      <nav className="flex items-center justify-between p-1">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              width="354"
              height="311"
              viewBox="0 0 354 311"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M266.558 0C266.918 3.82124e-05 267.25 0.193998 267.428 0.507812L353.734 153.203C353.905 153.506 353.906 153.876 353.737 154.181L320.885 213.316C320.708 213.634 320.374 213.831 320.011 213.831H268.864C268.096 213.831 267.615 214.66 267.996 215.327L293.592 260.125C293.763 260.425 293.767 260.791 293.603 261.095L271.336 302.448C270.963 303.141 269.974 303.152 269.586 302.468L201.212 181.993C200.824 181.309 199.834 181.32 199.461 182.013L150.754 272.497C150.396 273.163 150.878 273.971 151.635 273.971H182.731C183.121 273.971 183.476 274.198 183.64 274.552L199.665 309.305C199.97 309.967 199.486 310.722 198.757 310.723H88.5146C88.146 310.723 87.8069 310.52 87.6328 310.195L66.6972 271.125C66.5324 270.817 66.5396 270.446 66.7167 270.146L89.1689 232.053C89.5629 231.384 90.5346 231.4 90.9072 232.08L105.66 259.024C106.037 259.713 107.025 259.719 107.409 259.034L229.552 41.583C229.926 40.9164 229.444 40.0928 228.68 40.0928H194.227C193.863 40.0928 193.528 40.2909 193.352 40.6094L103.978 202.368C103.616 203.024 102.687 203.063 102.271 202.439L76.7968 164.228C76.587 163.913 76.5725 163.506 76.7597 163.178L146.01 41.5879C146.389 40.9213 145.908 40.0928 145.141 40.0928H110.447C110.088 40.0928 109.756 40.2863 109.578 40.5986L43.5488 156.571C43.3848 156.859 43.3749 157.21 43.5214 157.508L59.5478 190.035C59.6753 190.294 59.6852 190.596 59.5742 190.862L43.833 228.642C43.5124 229.411 42.4464 229.474 42.038 228.747L0.127873 154.183C-0.043557 153.878 -0.0423356 153.505 0.129826 153.2L86.4335 0.507812C86.6109 0.193944 86.9441 0 87.3046 0H266.558ZM261.351 71.6543C260.955 70.9927 259.991 71.0083 259.617 71.6826L223.734 136.502C223.568 136.803 223.567 137.168 223.733 137.469L243.488 173.257C243.653 173.556 243.96 173.75 244.301 173.771L296.506 177.04C296.887 177.064 297.249 176.867 297.437 176.535L310.131 154.197C310.309 153.884 310.304 153.5 310.119 153.19L261.351 71.6543Z"
                fill="#FD6F00"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#apresentacao"
            className="text-primary hover:text-accent transition-colors"
          >
            Apresentação
          </a>
          <a
            href="#sobre"
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre mim
          </a>
          <a
            href="#projetos"
            className="text-foreground hover:text-primary transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Download CV Button */}
        <Button className="bg-primary hover:bg-accent text-primary-foreground">
          Download CV
        </Button>
      </nav>
    </header>
  );
}
