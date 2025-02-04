import os

def get_code_files_to_txt(folder_paths, output_file="file_contents.txt"):
    """
    Scans multiple folders for .py, .html, .css, and .js files, extracts their content, 
    and writes it to an output file.

    :param folder_paths: List of folder paths to scan
    :param output_file: Name of the output text file
    """
    valid_extensions = (".py", ".html", ".css", ".js")  # Extensions to filter
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for folder_path in folder_paths:
            if not os.path.exists(folder_path):
                outfile.write(f"Folder not found: {folder_path}\n")
                outfile.write("=" * 40 + "\n")
                continue  # Skip to the next folder if the path is invalid
            
            outfile.write(f"Scanning Folder: {folder_path}\n")
            outfile.write("=" * 40 + "\n")

            for root, _, files in os.walk(folder_path):
                for file in files:
                    if file.endswith(valid_extensions):  # Check for multiple extensions
                        file_path = os.path.join(root, file)

                        outfile.write(f"File Path: {file_path}\n")
                        outfile.write(f"File Name: {file}\n")

                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                code = f.read()
                                outfile.write("Code:\n")
                                outfile.write(code + "\n")
                        except UnicodeDecodeError:
                            outfile.write("Skipping binary or non-UTF-8 file.\n")
                        except Exception as e:
                            outfile.write(f"Error reading file {file_path}: {e}\n")

                        outfile.write("-" * 40 + "\n")

# Example usage:
folder_paths = [
    r"C:\Users\admin\Desktop\Everything from previous laptop\job_search\job_search",
    r"C:\Users\admin\Desktop\Everything from previous laptop\job_search\api",
    r"C:\Users\admin\Desktop\Everything from previous laptop\job_search\frontend\src"
]  # Add multiple folder paths

output_file = "code_files.txt"  # Output file name
get_code_files_to_txt(folder_paths, output_file)
