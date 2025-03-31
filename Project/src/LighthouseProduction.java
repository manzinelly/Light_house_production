import java.util.List;

public class LighthouseProduction {
    private List<Project> projects;

    public LighthouseProduction() {
        this.projects = projects;
    }

    public void addProject(String name, String description, String startDate, String endDate) {
        projects.add(new Project(name, description, startDate, endDate));
        System.out.println("Project added: " + name);
    }

    public void listProjects() {
        if (projects.isEmpty()) {
            System.out.println("No projects available.");
            return;
        }

        System.out.println("Current projects:");
        for (Project project : projects) {
            System.out.println(project);
        }
    }
    class Project {
        private String name;
        private String description;
        private String startDate;
        private String endDate;

        public Project(String name, String description, String startDate, String endDate) {
            this.name = name;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
        }

        @Override
        public String toString() {
            return "Project: " + name + " | description=" + description + " | StartDate: " + startDate + " | endDate: " + endDate;
        }
    }
}
